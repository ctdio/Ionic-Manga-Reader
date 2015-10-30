// controller for displaying tons of manga
angular.module('app.controllers').controller("LatestMangaController", function($scope, $stateParams, $http, $ionicHistory, $timeout,
  ionicMaterialInk, ionicMaterialMotion, $ionicScrollDelegate, MangaStoreService){
  $scope.isExpanded = true;
  $scope.loading = true;
  $scope.canLoadMore = true;
  $scope.$parent.setExpanded(true);
  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(true);
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
  $scope.getLatestUpdatedManga = function(){
    $scope.loading = true;
    $http.get("http://charlie-duong.com/manga/latestUpdates?page=" + $scope.latestUpdatedPageCount).then(function(data){ //success
      $scope.latestUpdatedManga = data.data.manga;
      ionicMaterialMotion.fadeSlideIn();
      ionicMaterialInk.displayEffect();
      $scope.loading = false;
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.loadMore = function(){
    $scope.latestUpdatedPageCount++;
    $http.get("http://charlie-duong.com/manga/latestUpdates?page="
      + $scope.latestUpdatedPageCount).then(function(data){ //success
      $scope.latestUpdatedManga = $scope.latestUpdatedManga.concat(data.data.manga);
      ionicMaterialMotion.fadeSlideIn();
      ionicMaterialInk.displayEffect();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
  $scope.storeManga = function(id){
    MangaStoreService.setMangaID(id);
  };
  $scope.getLatestUpdatedManga();

});
