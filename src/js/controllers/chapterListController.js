// controller for menu swapping with menu
angular.module('app.controllers').controller("ChapterListController", [
  "$scope", "$timeout", "ionicMaterialMotion", "ionicMaterialInk", "MangaStoreService", "SqliteDB",
  function($scope, $timeout, ionicMaterialMotion, ionicMaterialInk, MangaStoreService, SqliteDB){

  // maybe use this to lessen the amount of chapters that need to be rendered at once
  // this would also help with navigation by making it easier to traverse large numbers
  // of chapters. Ex. Getting to chapter 1 in Naruto
  function chunk(array, chunkSize){
    var chunks = [], i = 0, n = array.length;
    while (i < n){
      chunks.push(array.slice(i, i + chunkSize));
      i += chunkSize;
    }
  }

  $scope.isExpanded = true;
  $scope.$parent.setExpanded(true);
  $scope.setChapter = function(chapter){
    chapter.clicked = true;
    MangaStoreService.setChapter(chapter[3]);
    SqliteDB.insertReadChapter(chapter[3], MangaStoreService.getMangaID()).then(function(){
      console.log("chapter added!!!!");
    }, function(){
      console.log("chapter not added...");
    });
  };
  $scope.loading = true;
  $scope.setComplete = function(){ // t/f
    $scope.loading = false;
    console.log("LOADING IS DONE");
  }
  $scope.data = {
    initialChapters : MangaStoreService.getManga().chapters,
    click : $scope.setChapter,
    setComplete : $scope.setComplete
  };
  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(true);
    //$scope.data.chapters = MangaStoreService.getManga().chapters;
    ionicMaterialInk.displayEffect();
  });

}]);
