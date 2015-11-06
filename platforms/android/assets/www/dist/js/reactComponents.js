/* @jsx React.DOM */

var ChapterChunkComponent = React.createClass({displayName: "ChapterChunkComponent",
  propTypes : {
    click : React.PropTypes.func,
    chunk : React.PropTypes.array
  },
  onClick : function(){
    this.props.click(this.props.chunk);
    document.location.href = "#/app/chapterList";
  },
  render : function(){
    return (
      React.createElement("a", {onClick: this.onClick, 
          className: "item item-icon-left"}, 
          React.createElement("i", {className: "icon ion-folder"}), 
          React.createElement("h2", null, this.props.chunk[0][0], " - ", this.props.chunk[this.props.chunk.length-1][0])
      )
    );
  }
});
var ChapterChunksListComponent = React.createClass({displayName: "ChapterChunksListComponent",
  propTypes : {
    click : React.PropTypes.func,
    chapterChunks : React.PropTypes.array
  },
  render : function(){
    return (
      React.createElement("div", {className: "list"}, 
        this.props.chapterChunks.map(function(item , i){
          return(
            React.createElement(ChapterChunkComponent, {chunk: item, click: this.props.click, key: i})
          )
        }, this)
      )
    );
  }
});
angular.module('app').value('ChapterChunksListComponent', ChapterChunksListComponent);

/* @jsx React.DOM */

var ChapterComponent = React.createClass({displayName: "ChapterComponent",
  getInitialState : function(){
    return {clicked : this.props.chapter.clicked};
  },
  onClick : function(){
    this.setState({clicked : true}); // refresh
    console.log(this.props.chapter.clicked);
    this.props.click(this.props.chapter);
    document.location.href = "#/app/chapterViewer";
  },

  render : function(){
    return (
        React.createElement("a", {onClick: this.onClick, className: "item item-icon-left"}, 
            React.createElement("i", {className: "icon " + (this.state.clicked ? "ion-document-text" : "ion-document")}), 
            React.createElement("h2", null, this.props.chapter[0], " : ", this.props.chapter[1]), 
            React.createElement("p", null, this.props.chapter[1])
        )
    );
  }
});
var ChapterListComponent = React.createClass({displayName: "ChapterListComponent",
  propTypes : {
    click : React.PropTypes.func,
    chapters : React.PropTypes.array
  },
  render : function(){
    console.log("Chapter list has " + this.props.chapters.length);
    console.log(this.props.chapters[0].clicked);
    return (
      React.createElement("div", {className: "list"}, 
        this.props.chapters.map(function(item , i){
          console.log(item.clicked);
          return(
            React.createElement(ChapterComponent, {chapter: item, click: this.props.click, key: i})
          )
        }, this)
      )
    );
  }
});
angular.module('app').value('ChapterListComponent', ChapterListComponent);

/* @jsx React.DOM */

var MangaComponent = React.createClass({displayName: "MangaComponent",
  onClick : function(i){
    console.log("" +this.props.manga[i]._id);
    this.props.click(this.props.manga[i]._id);
    document.location.href = "#/app/mangaDetails";
  },
  render : function(){
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
angular.module('app').value('MangaComponent', MangaComponent);
