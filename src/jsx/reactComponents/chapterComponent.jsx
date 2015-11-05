/* @jsx React.DOM */

var ChapterComponent = React.createClass({
  getInitialState : function(){
    // apparently not an anti-pattern anymore because 'initial'
    return {clicked : this.props.chapter.clicked};
  },
  onClick : function(){
    this.setState({clicked : true}); // refresh
    this.props.click(this.props.chapter);
    document.location.href = "#/app/chapterViewer";
  },
  render : function(){
    return (
        <a onClick={this.onClick}
            className={"item item-icon-left"}>
            <i className={"icon " + (this.state.clicked ? "ion-document-text" : "ion-document")}></i>
            <h2>{this.props.chapter[0]}</h2>
            <p>{this.props.chapter[3]}</p>
        </a>
    );
  }
});
var ChapterListComponent = React.createClass({
  // getInitialState : function(){
  //   // apparently not an anti-pattern anymore because 'initial'
  //   return {chapters : this.props.initialChapters};
  // },
  // onClick : function(i){
  //   this.state.chapters[i].clicked = true;
  //   this.setState({chapters : this.state.chapters}); // refresh
  //   this.props.click(this.state.chapters[i]);
  //   document.location.href = "#/app/chapterViewer";
  // },
  componentDidMount : function(){
    this.props.setComplete();
  },
  render : function(){
    alert("Rendering!");
    return (
      <div className="list">
        {this.props.initialChapters.map(function(item , i){
          return(
            <ChapterComponent chapter={item} click={this.props.click}></ChapterComponent>
          )
        }, this)}
      </div>
    );
  }
});
angular.module('app').value('ChapterListComponent', ChapterListComponent);
