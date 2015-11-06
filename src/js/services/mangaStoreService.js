// this service acts as a datastore
angular.module("app.services").service("MangaStoreService", [function(){
  var mangaID = {};
  var manga = {}; // acts like a private var
  var chapterChunk = [];
  var chapter = {};
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
  this.setChapterID = function(id){
    console.log("Chapter was set to " + id);
    chapter = id;
  };
  this.getChapterID = function(){
    return chapter;
  };
  this.setChapterChunk = function(chunk){
    chapterChunk = chunk;
  };
  this.getChapterChunk = function(){
    return chapterChunk;
  }
}]);
