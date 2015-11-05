/* @jsx React.DOM */

var MangaComponent = React.createClass({displayName: "MangaComponent",
  onClick : function(i){
    console.log("" +this.props.manga[i]._id);
    this.props.click(this.props.manga[i]._id);
    document.location.href = "#/app/mangaDetails";
  },
  render : function(){
    var items = [];
    for (var i = 0; i < this.props.manga.length; i++){
      console.log("" +this.props.manga[i]._id);
      var categories = "";
      /*
      for(var j = 0; j < this.props.latestUpdatedManga[i].category.length - 1; j++){
        categories += this.props.latestUpdatedManga[i].category[j] + ", "
      }
      categories += this.props.latestUpdatedManga[this.props.latestUpdatedManga[i].category.length - 1];

      items.push(
        <a href={"#/app/mangaDetails"} onClick={this.props.click(this.props.latestUpdatedManga[i]._id)}
            className={"item item-thumbnail-left"}>
            <img src={"https://cdn.mangaeden.com/mangasimg/" + this.props.latestUpdatedManga[i].image}/>
            <h2>{this.props.latestUpdatedManga[i].title}</h2>
            <p>{this.props.latestUpdatedManga[i].category}</p>
            <p>Last Updated On : {categories}</p>
        </a>
      );
      */
    }
    return (
      React.createElement("div", {className: "list"}, 
        this.props.manga.map(function(item , i){
          return(
            React.createElement("a", {onClick: this.onClick.bind(this, i), key: i, 
                className: "item item-thumbnail-left"}, 
                React.createElement("img", {src: "https://cdn.mangaeden.com/mangasimg/" + item.image}), 
                React.createElement("h2", null, item.title), 
                React.createElement("p", null, "Last Updated On : ", item.last_chapter_date), 
                React.createElement("p", null, item.hits, " hits")
            )
          )
        }, this)
      )
    );
  }
});
angular.module('app').value('MangaComponent'.MangaComponent);
