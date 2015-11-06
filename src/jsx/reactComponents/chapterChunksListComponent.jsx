/* @jsx React.DOM */

var ChapterChunkComponent = React.createClass({
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
      <a onClick={this.onClick}
          className={"item item-icon-left"}>
          <i className={"icon ion-folder"}></i>
          <h2>{this.props.chunk[0][0]} - {this.props.chunk[this.props.chunk.length-1][0]}</h2>
      </a>
    );
  }
});
var ChapterChunksListComponent = React.createClass({
  propTypes : {
    click : React.PropTypes.func,
    chapterChunks : React.PropTypes.array
  },
  render : function(){
    return (
      <div className="list">
        {this.props.chapterChunks.map(function(item , i){
          return(
            <ChapterChunkComponent chunk={item} click={this.props.click} key={i}></ChapterChunkComponent>
          )
        }, this)}
      </div>
    );
  }
});
angular.module('app').value('ChapterChunksListComponent', ChapterChunksListComponent);
