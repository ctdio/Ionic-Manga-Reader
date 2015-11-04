angular.module("app.directives").directive("postImageRepeat",function(){
    return function(scope, element, attrs){
        $(".panzoom").panzoom({
          maxScale : 2,
          increment : 0.1,
          contain : false
        }).panzoom("zoom", true);
    };
});
