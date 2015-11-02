angular.module("app.factories").factory("SearchFactory", function($http){
  return {
    search : function(query){
      return $http.get("http://charlie-duong.com/manga/search?search=" + query)
    }
  };
});
