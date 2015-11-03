angular.module("app.controllers").controller("MangaDetailsController", function($scope, $http,
  ionicMaterialMotion, MangaDetailsFactory, MangaStoreService, SqliteDAOService){
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.loading = true;
  $scope.hasChapters = false;
  $scope.manga = {};
  $scope.getManga = function(){
    $scope.hasChapters = false;
    MangaDetailsFactory.getManga(MangaStoreService.getMangaID()).then(function(data){
      $scope.manga = data.data;
      MangaStoreService.setManga(data.data);
      $scope.loading = false;
      //ionicMaterialMotion.slideUp();
      //if($scope.manga.chapters.length == 0)
      $scope.hasChapters = true;
    }, function(){ //fail
      alert("failed");
    });
  };

  $scope.$on("$ionicView.beforeEnter", function(){
    $scope.$parent.setExpanded(false);
    //ionicMaterialInk.displayEffect();
    $scope.getManga();
  });
});
