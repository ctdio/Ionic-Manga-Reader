// this service acts as a datastore
angular.module("app.services").service("MangaStoreService", function(SqliteDB){
  var mangaID = {};
  var manga = {}; // acts like a private var
  this.setMangaID = function(id){
    mangaID = id;
  };
  this.getMangaID = function(){
    return mangaID;
  };
  this.setManga = function(m){
    manga = m;
  };
  this.getManga = function(){
    return manga;
  };
  // for reading chapters
  this.setChapter = function(id){
    console.log("Chapter was set to " + id);
    chapter = id;
  };
  this.getChapter = function(){
    return chapter;
  };

});
