// controller for displaying tons of manga
angular.module('app.controllers').controller("BrowseController", function($scope, $http, $ionicHistory, MangaStoreService){
  $scope.mangas = {};
  $scope.getManga = function(){
    $http.get("https://www.mangaeden.com/api/list/0/?p=1&l=30").then(function(data){ //success
      $scope.mangas = data.data.manga;
      console.log("request returned");
      console.log(data);
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.storeManga = function(id){
    MangaStoreService.setManga(id);
  };
  $scope.getManga();
});
