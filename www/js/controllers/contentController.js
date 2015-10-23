// controller for menu swapping with menu
angular.module('app.controllers').controller("ContentController", function($scope, $ionicPlatform, $ionicHistory){
  $ionicPlatform.registerBackButtonAction(function(event){
    var backView = $ionicHistory.backView();
    if(backView){
      $ionicHistory.goBack();
    }
    else{
      $ionicPlatform.exitApp();
    }
  }, 100);
});
