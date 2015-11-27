angular.module("app.controllers").controller("MangaDetailsController", [
  "$scope", "$http", "ionicMaterialMotion", "MangaDetailsFactory", "MangaStoreService", "SqliteDB",
  function( $scope, $http, ionicMaterialMotion, MangaDetailsFactory, MangaStoreService, SqliteDB){
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.loading = true;
  $scope.hasChapters = false;
  $scope.manga = [];
  $scope.favorited = false;
  $scope.getManga = function(){
    console.log("got manga!");
    $scope.hasChapters = false;
    MangaDetailsFactory.getDetails(MangaStoreService.getMangaID()).then(function(data){
      $scope.manga = data.data;
      SqliteDB.checkIfFavorited(MangaStoreService.getMangaID()).then(function(res){
        if(res.rows.length > 0){
          $scope.favorited = true;
          console.log("favorited");
        }
        else{
          console.log("not favorited");
        }
      }, function(){
        console.log("errrrr");
      });
      $scope.hasChapters = true;
      SqliteDB.getReadChapters(MangaStoreService.getMangaID()).then(function(res){
        console.log(res.rows.length + " Chapters retrieved");
        var ids = [];
        for(var i = 0; i < res.rows.length; i++){
            ids.push(res.rows.item(i).id);
        }
        for (var i = 0; i < $scope.manga.chapters.length; i++){
          if(ids.indexOf($scope.manga.chapters[i][3]) == -1)
            $scope.manga.chapters[i].clicked = false;
          else
            $scope.manga.chapters[i].clicked = true;
        }
        $scope.manga.chapters.reverse();
        MangaStoreService.setManga($scope.manga);
        $scope.loading = false;
      });
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.toggleFavorite = function(){
    if(!$scope.favorited){
      SqliteDB.insertFavoritedManga(MangaStoreService.getMangaID(), $scope.manga.title,
       $scope.manga.image).then(function(res){
        console.log("Manga Inserted!");
        $scope.favorited = true;
      });
    }
    else{
      SqliteDB.removeFavoritedManga(MangaStoreService.getMangaID()).then(function(res){
        console.log("Manga removed!");
        $scope.favorited = false;
      });
    }
  };
  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.$parent.setExpanded(false);
  });
  $scope.getManga();
}]);
