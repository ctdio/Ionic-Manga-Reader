// controller for displaying tons of manga
angular.module('app.controllers').controller("SearchController", function($scope,
  $timeout, $http ,ionicMaterialMotion,$ionicHistory, MangaStoreService){
  $scope.mangas = {};
  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$on("$ionicView.enter", function(){
    $timeout(function(){
      $scope.$parent.setExpanded(false);
    }, 300);
    ionicMaterialMotion.fadeSlideIn();
    ionicMaterialInk.displayEffect();
  });
  $scope.query = "";
  $scope.search = function(){
    Keyboard.close();
    $http.get("http://charlie-duong.com/manga/search?search="+ $scope.query).then(function(data){ //success
      $scope.mangas = data.data.manga;
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.storeManga = function(id){
    MangaStoreService.setMangaID(id);
  };
  ionicMaterialMotion.slideUp({
      selector: '.slide-up'
  });
});
