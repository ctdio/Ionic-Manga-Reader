// controller for menu swapping with menu
angular.module('app.controllers').controller("ChapterListController", [
  "$scope", "$timeout", "ionicMaterialMotion", "ionicMaterialInk", "MangaStoreService", "SqliteDB",
  function($scope, $timeout, ionicMaterialMotion, ionicMaterialInk, MangaStoreService, SqliteDB){
  $scope.isExpanded = true;
  $scope.$parent.setExpanded(true);
  $scope.setChapter = function(chapter){
    chapter.clicked = true;
    MangaStoreService.setChapterID(chapter[3]);
    SqliteDB.insertReadChapter(chapter[3], MangaStoreService.getMangaID()).then(function(){
      console.log("chapter added!!!!");
    }, function(){
      console.log("chapter not added...");
    });
  };
  $scope.data = {
    chapters : MangaStoreService.getChapterChunk(),
    click : $scope.setChapter
  };

  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(true);
    //$scope.data.chapters = MangaStoreService.getManga().chapters;
    ionicMaterialInk.displayEffect();
  });

}]);
