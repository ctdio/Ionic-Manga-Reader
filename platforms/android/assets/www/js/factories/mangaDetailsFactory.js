angular.module("app.factories").factory("MangaDetailsFactory", function($http){
  return {
    getDetails : function(mangaID){
      return $http.get("https://www.mangaeden.com/api/manga/" + mangaID);
    }
  };
});
