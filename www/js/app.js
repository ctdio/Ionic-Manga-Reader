// Ionic Starter App

angular.module('app', ['ionic', 'app.controllers', 'app.filters', 'app.directives', 'ion-gallery'])
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.scrolling.jsScrolling(false);
  $ionicConfigProvider.views.transition("none");
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'ContentController'
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'views/search.html',
        controller : 'SearchController'
      }
    }
  })
  .state('app.latest', {
    url: '/latest',
    views: {
      'menuContent': {
        templateUrl: 'views/latest.html',
        controller: 'LatestMangaController'
      }
    }
  })
  .state('app.popular', {
    url: '/popular',
    views: {
      'menuContent': {
        templateUrl: 'views/popular.html',
        controller: 'PopularMangaController'
      }
    }
  })
  .state('app.mangaDetails', {
    url: '/mangaDetails',
    views: {
      'menuContent': {
        templateUrl: 'views/mangaDetails.html',
        controller: 'MangaDetailsController'

      }
    }
  })
  .state('app.chapterList', {
    url: '/chapterList',
    views: {
      'menuContent': {
        templateUrl: 'views/chapterList.html',
        controller: 'ChapterListController'
      }
    }
  })
  .state('app.chapterViewer', {
    url: '/chapterViewer',
    cache : false,
    views: {
      'menuContent': {
        templateUrl: 'views/chapterViewer.html',
        controller : 'ChapterController'
      }
    }
  });
  // if no state is specified, go to this one
  $urlRouterProvider.otherwise('/app/latest');
})
.run(function($ionicPlatform, $ionicHistory, $ionicPopup) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $ionicPlatform.registerBackButtonAction(function(event){
    var backView = $ionicHistory.backView();
    if(backView){
      $ionicHistory.goBack();
    }
    else{
      var confirmPopup = $ionicPopup.confirm({
        title: 'Exit',
        template: 'Are you sure you want to exit this app?',
        okText : 'Yes',
        cancelText : 'No'
      });
      confirmPopup.then(function(res) {
        if(res) {
          ionic.Platform.exitApp();
        }
      });

    }
  }, 100);

});
