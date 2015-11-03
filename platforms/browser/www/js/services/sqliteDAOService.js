angular.module("app.services").service("SqliteDAOService", function($cordovaSQLite){
  var createMangaTableQuery = "CREATE TABLE IF NOT EXISTS favorited_manga(id VARCHAR(50) "
    + "PRIMARY KEY NOT NULL,title TEXT NOT NULL, image TEXT NOT NULL)";
  var readChaptersTableQuery = "CREATE TABLE IF NOT EXISTS read_chapters"
    + "(id VARCHAR(50) PRIMARY KEY NOT NULL, manga_id VARCHAR(50) NOT NULL)";
  var insertIntoFavMangaQuery = "INSERT INTO favorited_manga(id, title, image) VALUES(?,?,?)";
  var selectFavMangaQuery = "SELECT * FROM manga";
  var insertReadChapterQuery = "INSERT INTO read_chapters(id, manga_id) VALUES (?, ?)";
  var selectReadChaptersQuery = "SELECT id FROM read_chapters WHERE manga_id = ?";

  var db = $cordovaSQLite.openDB({name : "manga.db"});
  $cordovaSQLite.execute(db, createMangaTableQuery, []).then(function(res){
    console.log("Manga table created!");
  }, function(err){
    console.log("CREATE ERROR: " + err);
  });
  /*
  this.insertFavoritedManga = function(id, title, image){
    return $cordovaSQLite.execute(db, insertIntoFavMangaQuery, [id, title, image]);
  };
  this.getFavoritedManga = function(){
    return $cordovaSQLite.execute(db, selectFavMangaQuery, []);
  };
  this.insertReadChapter = function(chapterID, mangaID){
    return $cordovaSQLite.execute(db, insertReadChapterQuery ,[]);
  };
  this.getReadChapters = function(mangaID){
    return $cordovaSQLite.execute(db, selectReadChaptersQuery, [mangaID]);
  };
  */
});
