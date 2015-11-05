/* @jsx React.DOM */

var ChapterComponent = React.createClass({
  getInitialState : function(){
    // apparently not an anti-pattern anymore because 'initial'
    return {chapters : this.props.initialChapters};
  },
  onClick : function(i){
    this.state.chapters[i].clicked = true;
    this.setState({chapters : this.state.chapters}); // refresh
    this.props.click(this.state.chapters[i]);
    document.location.href = "#/app/chapterViewer";
  },
  componentDidMount : function(){
    this.props.setComplete();
  },
  render : function(){
    return (
      <div className="list">
        {this.state.chapters.map(function(item , i){
          return(
            <a onClick={this.onClick.bind(this, i)} key={i}
                className={"item item-icon-left"}>
                <i className={"icon " + (this.state.chapters[i].clicked ? "ion-document-text" : "ion-document")}></i>
                <h2>{item[0]}</h2>
                <p>{item[3]}</p>
            </a>
          )
        }, this)}
      </div>
    );
  }
});
angular.module('app').value('ChapterComponent', ChapterComponent);
