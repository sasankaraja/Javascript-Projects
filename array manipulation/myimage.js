
app.directive("myImage",function () {
    return{
        restrict: "EA",
        template: function (element, attribute) {
            return "<img src='logo_"+attribute.shape+".png'>"
        }
    };
});
