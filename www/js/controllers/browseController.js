// controller for displaying tons of manga
angular.module('app.controllers').controller("BrowseController", function($scope, $http, $ionicHistory, MangaStoreService){
  $scope.mangas = {};
  $scope.getManga = function(){
    $http.get("http://charlie-duong.com/manga/latestUpdates").then(function(data){ //success
      $scope.mangas = data.data;
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.storeManga = function(id){
    MangaStoreService.setManga(id);
  };
  $scope.getManga();
});
