angular.module("app.factories").factory("PopularMangaFactory", function($http){
  return {
    getManga : function(page){
      return $http.get("http://charlie-duong.com/manga/popular?page=" + page);
    }
  };
});
