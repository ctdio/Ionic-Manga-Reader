// controller for displaying tons of manga
angular.module('app.controllers').controller("PopularMangaController", function($scope, $stateParams,
   $http, $ionicHistory, $timeout, ionicMaterialInk, ionicMaterialMotion, $ionicScrollDelegate,
    PopularMangaFactory, MangaStoreService){
  $scope.isExpanded = true;
  $scope.canLoadMore = true;
  $scope.$parent.setExpanded(true);
  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(true);
    ionicMaterialMotion.fadeSlideIn();
    ionicMaterialInk.displayEffect();
  });
  $scope.popularManga = [];
  $scope.popularPageCount = 0;
  window.addEventListener('orientationchange', function(){
    $timeout(function(){
      $ionicScrollDelegate.resize();
      $scope.apply();
    }, 500);
  });
  $scope.loadMore = function(){
    PopularMangaFactory.getManga($scope.popularPageCount).then(function(data){ //success
      $scope.popularManga = $scope.popularManga.concat(data.data.manga);
      ionicMaterialMotion.fadeSlideIn();
      ionicMaterialInk.displayEffect();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
    $scope.popularPageCount++;
    if($scope.popularPageCount >= 10){
      $scope.canLoadMore = false;
    }
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
  $scope.storeManga = function(id){
    MangaStoreService.setMangaID(id);
  };
});