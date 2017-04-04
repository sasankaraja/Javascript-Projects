app.controller('ProductController',['$scope',function ($scope) {

    $scope.products = [
        {
            "product_id": 1,
            "product_name": "Samsung A8",
            "product_description": "Samsung Galaxy A8 - user opinions and reviews.Samsung Galaxy A8 Duos SM-A8000 DS Dual Sim LTE Gold 16GB Factory UNLOCKED.NEW Samsung Galaxy A8 Dual-SIM 32GB 5.7-Inch 4G LTE Factory Unlocked GOLD.",
            "product_image":"samsunga8.png",    
            "product_price":25000
        },
        {
            "product_id": 2,
            "product_name": "Moto G 3rd Gen",
            "product_description": "Motorola Moto G Android smartphone. Announced 2013, November. Features 3G, 4.5″ IPS LCD capacitive touchscreen, 5 MP camera, Wi-Fi, GPS, Bluetooth.Motorola Moto G Android smartphone. Announced 2013, November. Features 3G, 4.5″ IPS LCD capacitive touchscreen, 5 MP camera, Wi-Fi, GPS, Bluetooth.",
            "product_image":"moto.png",
            "product_price":17000
        },
        {
            "product_id": 3,
            "product_name": "Xiaomi Note 4G",
            "product_description": "Xiaomi Redmi Note 4G smartphone with 5.50-inch 720x1280 display powered by 1.6GHz processor alongside 2GB. Xiaomi Redmi Note 4G price, specs, NDTV's Rating, Xiaomi mobile phone review at NDTV Gadgets360.com.  Xiaomi Mi 5.",
            "product_image":"mi.png",
            "product_price":42000
        },


    ];
    $scope.cart=[];
    $scope.addToCart=function (productIndex) {
        // alert(productIndex);
        $scope.cart.push($scope.products[productIndex]);
        $scope.products[productIndex].disable = true;
    };
    $scope.removeItem = function (itemIndex) {
        $scope.cart[itemIndex].disable = false;
        $scope.cart.splice(itemIndex,1);
    };
    $scope.getTotal = function () {
        var total = 0;
        angular.forEach($scope.cart,function (value) {
            total += value.product_price;
        });
        return total;
    }
}]);

app.controller("TitleCtrl",function ($scope) {
    $scope.title = "Online Shopping";
});
