angular.module("app.factories").factory("SqliteDB", function($cordovaSQLite){

  var insertIntoFavMangaQuery = "INSERT INTO favorited_manga(id, title, image) VALUES(?,?,?)";
  var selectAllFavMangaQuery = "SELECT * FROM favorited_manga ORDER BY title";
  var removeFromFavMangaQuery = "DELETE FROM favorited_manga WHERE id = ?";
  var insertReadChapterQuery = "INSERT INTO read_chapters(id, manga_id) VALUES (?, ?)";
  var selectReadChaptersQuery = "SELECT id FROM read_chapters WHERE manga_id = ?";
  var checkExistsMangaQuery = "SELECT 1 FROM favorited_manga WHERE id = ?";
  return{
    checkIfFavorited : function(id){
      return $cordovaSQLite.execute(db,checkExistsMangaQuery, [id]);
    },
    insertFavoritedManga : function(id, title, image){
      return $cordovaSQLite.execute(db, insertIntoFavMangaQuery, [id, title, image]);
    },
    removeFavoritedManga : function(id){
      return $cordovaSQLite.execute(db, removeFromFavMangaQuery, [id]);
    },
    getAllFavoritedManga : function(){
      return $cordovaSQLite.execute(db, selectAllFavMangaQuery, []);
    },
    insertReadChapter : function(chapterID, mangaID){
      return $cordovaSQLite.execute(db, insertReadChapterQuery, [chapterID, mangaID]);
    },
    getReadChapters : function(mangaID){
      return $cordovaSQLite.execute(db, selectReadChaptersQuery, [mangaID]);
    }
  };
});
