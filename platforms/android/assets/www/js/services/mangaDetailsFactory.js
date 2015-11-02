angular.module("app.services").factory("MangaDetailsFactory", function($http, MangaStoreService){
  return {
    getManga : function(){
      return $http.get("https://www.mangaeden.com/api/manga/" + MangaStoreService.getMangaID());
    }
  };
});
