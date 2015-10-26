angular.module("app.directives").directive("postImageRepeat",function(){
    return function(scope, element, attrs){
      if(scope.$last){ // if last element in loop
        $(".panzoom").panzoom({
          startTransform : "scale(0.9)",
          maxScale : 2,
          increment : 0.1,
          contain : false
        }).panzoom("zoom", true);
      }
    };
});
