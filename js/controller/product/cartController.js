'use strict';

angular
    .module('baobabShop')
    .controller('cartCtrl', function($scope, $cookies, link, cart) {

        $scope.deleteProduct = function(name) {
            cart.removeProduct(name);
            download();
        };
        
        function download() {
            var cartData = cart.getProducts();
            $scope.productssss = cartData;
        };
        download();
       
    });