angular.module("app.controllers").controller("MangaDetailsController", function($scope, $http,
  ionicMaterialMotion, MangaStoreService){
  console.log("controller init")
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.loading = true;
  $scope.hasChapters = false;
  $scope.manga = {};
  $scope.getManga = function(){
    $scope.hasChapters = false;
    $http.get("https://www.mangaeden.com/api/manga/"+ MangaStoreService.getMangaID()).then(function(data){ //success
      console.log("data received");
      $scope.manga = data.data;
      MangaStoreService.setManga(data.data);
      $scope.loading = false;
      ionicMaterialMotion.slideUp();
      if($scope.manga.chapters !== undefined)
        $scope.hasChapters = true;
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.getManga();

});
