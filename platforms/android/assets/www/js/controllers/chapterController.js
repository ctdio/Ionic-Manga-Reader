angular.module("app.controllers").controller("ChapterController", function($scope, $http, ChapterStoreService){
  $scope.images = [];
  $scope.options = {
    index : 0
  };
  //gallery.init();
  $scope.getImages = function(){
    var pswpElement = $("#photoSwipe")[0];
    $http.get("https://www.mangaeden.com/api/chapter/" + ChapterStoreService.getChapter()).then(function(data){
      var images = data.data.images;
      for(var i = 0; i < images.length; i++){
        $scope.images.push({
          "src" : "http://cdn.mangaeden.com/mangasimg/" + images[i][1],
          "w" : images[i][2],
          "h" : images[i][3]
        })
      }
    });

  };
  $scope.getImages();
});
