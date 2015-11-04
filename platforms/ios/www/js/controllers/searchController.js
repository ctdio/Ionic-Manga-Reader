// controller for displaying tons of manga
angular.module('app.controllers').controller("SearchController", function($scope,
  $timeout, $http ,ionicMaterialInk,$ionicHistory, MangaFactory, MangaStoreService){
  $scope.searchedManga = [];
  $scope.searchPageCount = 0;
  $scope.isExpanded = false;
  $scope.$on("$ionicView.enter", function(){
    $timeout(function(){
      $scope.$parent.setExpanded(false);
    }, 300);
    ionicMaterialInk.displayEffect();
  });
  $scope.query = "";
  $scope.loading = false;
  $scope.search = function(){
    $scope.loaded = true;
    document.activeElement.blur();
    $scope.searchedManga = [];
    MangaFactory.getSearchedManga($scope.query).then(function(data){ //success
      $scope.searchedManga = data.data.manga;
      $scope.loaded = false;
      $scope.canLoadMore = true;
      ionicMaterialInk.displayEffect();
    }, function(){ //fail
      $scope.loaded = false;
    });
  };
  /*
  $scope.loadMore = function(){
    .then(function(data){ //success
      if(data.data.manga.length == 0){
        //$scope.canLoadMore = false;
      }
      else{
        $scope.searchedManga = $scope.manga.concat(data.data.manga);
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, function(){ //fail
    });
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
  */
  $scope.storeManga = function(id){
    MangaStoreService.setMangaID(id);
  };
});
