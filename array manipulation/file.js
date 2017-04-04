app.directive('myImage',function () {
    return{
        restrict: "EA",
        template:function (element, attribute) {
             return "<img src='mi_"+attribute.size+".png'>"
        }
    }
});
