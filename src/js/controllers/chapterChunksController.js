// controller for menu swapping with menu
angular.module('app.controllers').controller("ChapterChunksController", [
  "$scope", "$timeout", "ionicMaterialMotion", "ionicMaterialInk", "MangaStoreService", "SqliteDB",
  function($scope, $timeout, ionicMaterialMotion, ionicMaterialInk, MangaStoreService, SqliteDB){
  // maybe use this to lessen the amount of chapters that need to be rendered at once
  // this would also help with navigation by making it easier to traverse large numbers
  // of chapters. Ex. Getting to chapter 1 in Naruto
  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(true);
    //$scope.data.chapters = MangaStoreService.getManga().chapters;
    ionicMaterialInk.displayEffect();
  });
  function chunk(array, chunkSize){
    var chunks = [], i = 0, n = array.length;
    while (i < n){
      chunks.push(array.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return chunks;
  }
  $scope.isExpanded = true;
  $scope.setChunk = function(chunk){
    //console.log("clicked = " + chunk[0].clicked);
    MangaStoreService.setChapterChunk(chunk);
  };
  $scope.data = {
    chapterChunks : chunk(MangaStoreService.getManga().chapters, 50),
    click : $scope.setChunk
  };


}]);
