// controller for displaying tons of manga
angular.module('app').controller("PopularController", function($scope, $http){
  $scope.mangas = {};
  $scope.getManga = function(){
    $http.get("https://www.mangaeden.com/api/list/0/?p=1&l=30").then(function(data){
      $scope.mangas = data.data.manga;
      console.log("request returned");
      console.log(data);
    });
  };
  $scope.getManga();
});
