// controller for displaying tons of manga
angular.module('app.controllers').controller("LatestMangaController", [
  "$scope", "$stateParams", "$http", "$ionicHistory", "$timeout", "ionicMaterialInk",
  "ionicMaterialMotion", "$ionicScrollDelegate", "MangaFactory", "MangaStoreService",
  function($scope, $stateParams, $http, $ionicHistory, $timeout, ionicMaterialInk,
     ionicMaterialMotion, $ionicScrollDelegate, MangaFactory, MangaStoreService){
  $scope.storeManga = function(id){
   MangaStoreService.setMangaID(id);
  };
  $scope.infiniteScrollPaused = false;
  $scope.$on("$ionicView.enter", function(){
    $timeout(function(){
      $scope.infiniteScrollPaused = false;
    }, 1000);
    $scope.$parent.setExpanded(true);
    ionicMaterialInk.displayEffect();
  });
  $scope.$on("$ionicView.leave", function(){
    $scope.infiniteScrollPaused = true;
  });
  // acts as the prop for the react component
  $scope.data = {
    manga : [],
    click : $scope.storeManga
  };
  $scope.latestUpdatedPageCount = 0;
  $scope.isExpanded = true;
  $scope.loading = true;
  $scope.canLoadMore = true;
  $scope.$parent.setExpanded(true);
  $scope.loadMore = function(){
    MangaFactory.getLatestManga($scope.latestUpdatedPageCount).then(function(data){ //success
      $scope.data.manga = $scope.data.manga.concat(data.data.manga);
      ionicMaterialInk.displayEffect();
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
    $scope.latestUpdatedPageCount++;
    if($scope.latestUpdatedPageCount >= 3){
      $scope.canLoadMore = false;
    }
  };
  $scope.$on('$stateChangeSuccess', function() {
    if($scope.canLoadMore && !$scope.infiniteScrollPaused)
      $scope.loadMore();
  });
  $scope.continueLoading = function(){
    return $scope.canLoadMore;
  };
}]);
