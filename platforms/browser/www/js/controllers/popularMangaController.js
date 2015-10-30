// controller for displaying tons of manga
angular.module('app.controllers').controller("PopularMangaController", function($scope, $stateParams, $http, $ionicHistory, $timeout,
  ionicMaterialInk, ionicMaterialMotion, $ionicScrollDelegate, MangaStoreService){
  $scope.isExpanded = true;
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
  $scope.getPopularManga = function(){
    $http.get("http://charlie-duong.com/manga/popular?page=" + $scope.popularPageCount).then(function(data){ //success
      $scope.popularManga = data.data.manga;
      ionicMaterialMotion.fadeSlideIn();
      ionicMaterialInk.displayEffect();
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.storeManga = function(id){
    MangaStoreService.setMangaID(id);
  };
  $scope.getPopularManga();

});
