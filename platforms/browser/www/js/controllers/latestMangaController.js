// controller for displaying tons of manga
angular.module('app.controllers').controller("LatestMangaController", function($scope, $stateParams, $http, $ionicHistory, $timeout,
  ionicMaterialInk, ionicMaterialMotion, $ionicScrollDelegate, MangaFactory, MangaStoreService){
  $scope.isExpanded = true;
  $scope.loading = true;
  $scope.canLoadMore = true;
  $scope.$parent.setExpanded(true);
  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(true);
    //ionicMaterialMotion.fadeSlideIn();
    ionicMaterialInk.displayEffect();
  });
  $scope.latestUpdatedManga = [];
  $scope.latestUpdatedPageCount = 0;
  window.addEventListener('orientationchange', function(){
    $timeout(function(){
      $ionicScrollDelegate.resize();
      $scope.apply();
    }, 500);
  });
  $scope.loadMore = function(){
    MangaFactory.getLatestManga($scope.latestUpdatedPageCount).then(function(data){ //success
      $scope.latestUpdatedManga = $scope.latestUpdatedManga.concat(data.data.manga);
      //ionicMaterialMotion.fadeSlideIn();
      ionicMaterialInk.displayEffect();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
    $scope.latestUpdatedPageCount++;
    if($scope.latestUpdatedPageCount >= 10){
      $scope.canLoadMore = false;
    }
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
  $scope.storeManga = function(id){
    MangaStoreService.setMangaID(id);
  };
  //$scope.getLatestUpdatedManga();

});
