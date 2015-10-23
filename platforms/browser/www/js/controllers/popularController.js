// controller for displaying tons of manga
angular.module('app.controllers').controller("PopularController", function($scope, $http, $ionicHistory){
  $scope.mangas = {};
  $scope.getManga = function(){
    $http.get("https://www.mangaeden.com/api/list/0/?p=1&l=30").then(function(data){
      $scope.mangas = data.data.manga;
      console.log("request returned");
      console.log(data);
    });
  };
  $scope.getManga();
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
});
