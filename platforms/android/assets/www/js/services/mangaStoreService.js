angular.module("app.services").service("MangaStoreService", function(){
  var manga = {}; // acts like a private var
  this.setManga = function(id){
    console.log("Manga was set to " + id);
    manga = id;
  }
  this.getManga = function(){
    return manga;
  }
});
