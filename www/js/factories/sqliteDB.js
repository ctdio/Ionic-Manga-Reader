angular.module("app.factories").factory("SqliteDB", function($cordovaSQLite){

  var insertIntoFavMangaQuery = "INSERT INTO favorited_manga(id, title, image) VALUES(?,?,?)";
  var selectFavMangaQuery = "SELECT * FROM manga";
  var insertReadChapterQuery = "INSERT INTO read_chapters(id, manga_id) VALUES (?, ?)";
  var selectReadChaptersQuery = "SELECT id FROM read_chapters WHERE manga_id = ?";

  return{
    insertFavoritedManga : function(id, title, image){
      return $cordovaSQLite.execute(db, insertIntoFavMangaQuery, [id, title, image]);
    },
    getFavoritedManga : function(){
      return $cordovaSQLite.execute(db, selectFavMangaQuery, []);
    },
    insertReadChapter : function(chapterID, mangaID){
      return $cordovaSQLite.execute(db, insertReadChapterQuery ,[]);
    },
    getReadChapters : function(mangaID){
      return $cordovaSQLite.execute(db, selectReadChaptersQuery, [mangaID]);
    }
  };
});
