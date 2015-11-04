angular.module("app.controllers").controller("FavoritedMangaController", [
  "$scope", "$http", "ionicMaterialMotion", "MangaStoreService", "SqliteDB",
  function($scope, $http, ionicMaterialMotion, MangaStoreService, SqliteDB){
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$on("$ionicView.enter", function(){
      $scope.$parent.setExpanded(true);
      ionicMaterialMotion.fadeSlideIn();
      ionicMaterialInk.displayEffect();
    });
    $scope.favoritedManga = [];
    window.addEventListener('orientationchange', function(){
      $timeout(function(){
        $ionicScrollDelegate.resize();
        $scope.apply();
      }, 500);
    });
    $scope.getFavoritedManga = function(){
      SqliteDB.getAllFavoritedManga().then(function(res){ //success
        for(var i = 0; i < res.rows.length; i++){
          $scope.favoritedManga.push({
            id : res.rows.item(i).id,
            title : res.rows.item(i).title,
            image : res.rows.item(i).image
          });
        }
        ionicMaterialInk.displayEffect();
      });
    };
    $scope.storeManga = function(id){
      MangaStoreService.setMangaID(id);
    };
    $scope.getFavoritedManga();
}]);
