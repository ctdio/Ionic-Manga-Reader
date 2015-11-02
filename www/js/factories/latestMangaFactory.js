angular.module("app.factories").factory("LatestMangaFactory", function($http){
  return {
    getManga : function(page){
      return $http.get("http://charlie-duong.com/manga/latestUpdates?page=" + page);
    }
  };
});
