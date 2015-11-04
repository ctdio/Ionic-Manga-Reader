// controller for menu swapping with menu
angular.module('app.controllers').controller("ChapterListController", [
  "$scope", "$timeout", "ionicMaterialMotion", "ionicMaterialInk", "MangaStoreService", "SqliteDB",
  function($scope, $timeout, ionicMaterialMotion, ionicMaterialInk, MangaStoreService, SqliteDB){
  $scope.isExpanded = true;
  $scope.$parent.setExpanded(true);
  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(true);
    $scope.chapters = MangaStoreService.getManga().chapters;
    ionicMaterialInk.displayEffect();
  });
  $scope.setChapter = function(chapter){
    chapter.clicked = true;
    MangaStoreService.setChapter(chapter[3]);
    SqliteDB.insertReadChapter(chapter[3], MangaStoreService.getMangaID()).then(function(){
      console.log("chapter added!!!!");
    }, function(){
      console.log("chapter not added...");
    });
  };
}]);
