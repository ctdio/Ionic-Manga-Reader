angular.module("app.controllers").controller("MangaDetailsController", function($scope, $http, MangaStoreService, ChapterStoreService){
  console.log("controller init")
  $scope.manga = {};

  $scope.getManga = function(){
    $http.get("https://www.mangaeden.com/api/manga/" + MangaStoreService.getManga()).then(function(data){ //success
      $scope.manga = data.data;
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.setChapter = function(id){
    ChapterStoreService.setChapter(id);
  }
  $scope.getManga();

});
