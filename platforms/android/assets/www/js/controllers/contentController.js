// controller for menu swapping with menu
angular.module('app.controllers').controller("ContentController", function($scope, $ionicPlatform, $ionicScrollDelegate, $ionicHistory){
  $scope.isExpanded = false;
  $scope.setExpanded = function(bool) {
    $scope.isExpanded = bool;
  };
  $ionicPlatform.registerBackButtonAction(function(event){
    var backView = $ionicHistory.backView();
    if(backView){
      $ionicHistory.goBack();
    }
    else{
      alert("Leave?");
    }
  }, 100);
});
