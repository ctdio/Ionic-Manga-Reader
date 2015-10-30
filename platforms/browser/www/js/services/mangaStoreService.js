angular.module("app.services").service("MangaStoreService", function(){
  var mangaID = {};
  var manga = {}; // acts like a private var
  this.setMangaID = function(id){
    console.log("MangaID was set to " + id);
    mangaID = id;
  }
  this.getMangaID = function(){
    return mangaID;
  }
  this.setManga = function(m){
    manga = m;
  }
  this.getManga = function(){
    return manga;
  }
  // for reading chapters
  this.setChapter = function(id){
    console.log("Chapter was set to " + id);
    chapter = id;
  }
  this.getChapter = function(){
    return chapter;
  }

});
