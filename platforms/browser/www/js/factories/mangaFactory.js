angular.module("app.factories").factory("MangaFactory", function($http){
  return {
    getLatestManga : function(page){
      return $http.get("http://charlie-duong.com/manga/latestUpdates?page=" + page);
    },
    getPopularManga : function(page){
      return $http.get("http://charlie-duong.com/manga/popular?page=" + page);
    }
  };
});
