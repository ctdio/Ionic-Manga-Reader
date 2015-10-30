// controller for displaying tons of manga
angular.module('app.controllers').controller("SearchController", function($scope,
  $timeout, $http ,ionicMaterialMotion,$ionicHistory, MangaStoreService){
  $scope.manga = [];
  $scope.searchPageCount = 0;
  $scope.canLoadMore = false;
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
    $http.get("http://charlie-duong.com/manga/search?search="
      + $scope.query).then(function(data){ //success
      $scope.manga = data.data.manga;
      alert("Searched");
      $scope.canLoadMore = true;
    }, function(){ //fail
      alert("failed");
    });
  };
  $scope.loadMore = function(){
    $http.get("http://charlie-duong.com/manga/search?search="
      + $scope.query + "&page=" + $scope.searchPageCount).then(function(data){ //success
      if(data.data.manga.length == 0){
        $scope.canLoadMore = false;
      }
      else{
        $scope.manga = $scope.manga.concat(data.data.manga);
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    }, function(){ //fail
    });
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
  $scope.storeManga = function(id){
    MangaStoreService.setMangaID(id);
  };
  ionicMaterialMotion.slideUp({
      selector: '.slide-up'
  });
});
