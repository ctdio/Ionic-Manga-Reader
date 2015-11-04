angular.module("app.filters").filter("Date", [function(){
  return function(input){
    var date = new Date(input);
    console.log(date);
  };
}]);
