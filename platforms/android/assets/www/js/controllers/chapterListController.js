// controller for menu swapping with menu
angular.module('app.controllers').controller("ChapterListController", function($scope,
  $timeout, ionicMaterialMotion, MangaStoreService){
  $scope.isExpanded = true;
  $scope.$parent.setExpanded(true);
  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(true);
    $scope.apply();
    ionicMaterialMotion.fadeSlideIn();
    ionicMaterialInk.displayEffect();
  });
  $scope.chapters = MangaStoreService.getManga().chapters;
  $scope.setChapter = function(chapter){
    MangaStoreService.setChapter(chapter);
  }
});
