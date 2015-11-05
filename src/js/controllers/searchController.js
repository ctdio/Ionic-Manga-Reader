// controller for displaying tons of manga
angular.module('app.controllers').controller("SearchController", [
  "$scope", "$timeout", "$http" ,"ionicMaterialInk", "$ionicHistory", "MangaFactory", "MangaStoreService",
  function($scope, $timeout, $http ,ionicMaterialInk, $ionicHistory, MangaFactory, MangaStoreService){

  $scope.isExpanded = false;
  $scope.storeManga = function(id){
    MangaStoreService.setMangaID(id);
  };
  $scope.$on("$ionicView.enter", function(){
    $timeout(function(){
      $scope.$parent.setExpanded(false);
    }, 300);
    ionicMaterialInk.displayEffect();
  });
  $scope.data = {
    manga : [],
    click : $scope.storeManga
  };
  //$scope.searchPageCount = 0;
  $scope.query = "";
  $scope.loading = false;
  $scope.search = function(){
    $scope.loaded = true;
    document.activeElement.blur();
    $scope.searchedManga = [];
    MangaFactory.getSearchedManga($scope.query).then(function(data){ //success
      $scope.data.manga = data.data.manga;
      $scope.loaded = true;
      //$scope.canLoadMore = true;
      ionicMaterialInk.displayEffect();
    }, function(){ //fail
      $scope.loaded = false;
    });
  };
}]);
