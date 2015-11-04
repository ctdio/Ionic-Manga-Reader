angular.module("app.factories").factory("MangaDetailsFactory", ["$http", function($http){
  return {
    getDetails : function(mangaID){
      return $http.get("https://www.mangaeden.com/api/manga/" + mangaID);
    }
  };
}]);
