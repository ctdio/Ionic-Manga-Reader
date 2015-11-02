angular.module("app.controllers").controller("ChapterController", function($scope,
  $http, $ionicSlideBoxDelegate, $ionicModal, MangaStoreService){

  $scope.isExpanded = false;
  $scope.$parent.setExpanded(false);
  $scope.$on("$ionicView.enter", function(){
    $scope.$parent.setExpanded(false);
    ionicMaterialMotion.fadeSlideIn();
    ionicMaterialInk.displayEffect();
  });
  $scope.$on("$ionicView.beforeLeave", function(){
    $scope.modal.remove();
  });
  $scope.images = [];
  //gallery.init();
  $scope.getImages = function(){
    var pswpElement = $("#photoSwipe")[0];
    $http.get("https://www.mangaeden.com/api/chapter/" + MangaStoreService.getChapter()).then(function(data){
      var images = data.data.images.reverse();
      for(var i = 0; i < images.length; i++){
        $scope.images.push({
          "src" : "https://cdn.mangaeden.com/mangasimg/" + images[i][1]
        });
      }
      $ionicSlideBoxDelegate.enableSlide(false);
      $ionicSlideBoxDelegate.update();
    });
  };

  $scope.modal = {};
  $ionicModal.fromTemplateUrl('views/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.show = function(){
    $scope.modal.show();
  }
  $scope.getImages();
});
