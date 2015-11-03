// controller for menu swapping with menu
angular.module('app.controllers').controller("ChapterListController", function($scope,
  $timeout, ionicMaterialMotion, ionicMaterialInk, MangaStoreService){
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
  };
});
