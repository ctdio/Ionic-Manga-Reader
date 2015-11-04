angular.module("app.factories").factory("MangaFactory", ["$http", function($http){
  return {
    getLatestManga : function(page){
      return $http.get("http://charlie-duong.com/manga/latestUpdates?page=" + page);
    },
    getPopularManga : function(page){
      return $http.get("http://charlie-duong.com/manga/popular?page=" + page);
    },
    getSearchedManga : function(query){
      return $http.get("http://charlie-duong.com/manga/search?search=" + query);
    }
  };
}]);
