angular.module("app.factories").factory("MangaDetailsFactory", function($http){
  return {
    getManga : function(mangaID){
      return $http.get("https://www.mangaeden.com/api/manga/" + mangaID);
    }
  };
});
