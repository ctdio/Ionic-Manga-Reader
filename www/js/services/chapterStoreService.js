angular.module("app.services").service("ChapterStoreService", function(){
  var chapter = {}; // acts like a private var
  this.setChapter = function(id){
    console.log("Chapter was set to " + id);
    chapter = id;
  }
  this.getChapter = function(){
    return chapter;
  }
});
