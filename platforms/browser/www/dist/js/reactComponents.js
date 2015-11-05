/* @jsx React.DOM */

var LatestMangaComponent = React.createClass({displayName: "LatestMangaComponent",
  getDefaultProps(){
    return {
      latestUpdatedManga : []
    }
  },
  render : function(){
    var items = [];
    console.log(this.props);
    for (var i = 0; i < this.props.latestUpdatedManga.length; i++){
      items.push(
        React.createElement("a", {href: "#/app/mangaDetails", className: "item item-thumbnail-left"}, 
            React.createElement("img", {src: "https://cdn.mangaeden.com/mangasimg/" + this.props.latestUpdatedManga[i].image}), 
            React.createElement("h2", null, "this.props.latestUpdatedManga[i].title"), 
            React.createElement("p", null, "this.props.latestUpdatedManga[i].category"), 
            React.createElement("p", null, "Last Updated On : this.props.latestUpdatedManga[i].category")
        )
      );
    }
    return (React.createElement("div", {className: "list"}, items));
  }
});
angular.module('app').value('LatestMangaComponent'. LatestMangaComponent);
