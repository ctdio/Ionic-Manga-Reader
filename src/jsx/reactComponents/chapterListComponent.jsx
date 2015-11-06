/* @jsx React.DOM */

var ChapterComponent = React.createClass({
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
        <a onClick={this.onClick} className={"item item-icon-left"}>
            <i className={"icon " + (this.state.clicked ? "ion-document-text" : "ion-document")}></i>
            <h2>{this.props.chapter[0]} : {this.props.chapter[1]}</h2>
            <p>{this.props.chapter[1]}</p>
        </a>
    );
  }
});
var ChapterListComponent = React.createClass({
  propTypes : {
    click : React.PropTypes.func,
    chapters : React.PropTypes.array
  },
  render : function(){
    console.log("Chapter list has " + this.props.chapters.length);
    console.log(this.props.chapters[0].clicked);
    return (
      <div className="list">
        {this.props.chapters.map(function(item , i){
          console.log(item.clicked);
          return(
            <ChapterComponent chapter={item} click={this.props.click} key={i}></ChapterComponent>
          )
        }, this)}
      </div>
    );
  }
});
angular.module('app').value('ChapterListComponent', ChapterListComponent);
