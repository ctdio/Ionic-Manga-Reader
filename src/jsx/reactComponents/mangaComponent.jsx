/* @jsx React.DOM */

var MangaComponent = React.createClass({
  onClick : function(i){
    console.log("" +this.props.manga[i]._id);
    this.props.click(this.props.manga[i]._id);
    document.location.href = "#/app/mangaDetails";
  },
  render : function(){
    return (
      <div className="list">
        {this.props.manga.map(function(item , i){
          return(
            <a onClick={this.onClick.bind(this, i)} key={i}
                className={"item item-thumbnail-left"}>
                <img src={"https://cdn.mangaeden.com/mangasimg/" + item.image}/>
                <h2>{item.title}</h2>
                <p>Last Updated On : {item.last_chapter_date}</p>
                <p>{item.hits} hits</p>
            </a>
          )
        }, this)}
      </div>
    );
  }
});
angular.module('app').value('MangaComponent', MangaComponent);
