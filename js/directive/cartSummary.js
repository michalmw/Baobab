'use strict';

angular
    .module('baobabShop')
    .directive("cartSummary", function (cart) {
        return {

            templateUrl: 'views/cart/cartSummary.html',
            controller: function ($scope) {

                var cartData = cart.getProducts();
                $scope.products = cart.getProducts();

                $scope.total = function() {

                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += (cartData[i].price * cartData[i].count);
                    }
                    return total;
                };

                $scope.totalprice = function() {
                    var totalprice = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        totalprice += (cartData[i].price * cartData[i].count);
                    }

                    return totalprice;

                };

                $scope.itemCount = function () {

                    var total = 0;

                    for(var i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;

                    }
                    return total;
                }
            }
        }
    })
    .directive('cartNumberProduct', function(cart) {
        return {

            template: '<span>{{number()}}</span>',
            controller: function($scope) {

                 var cartData = cart.getProducts();

                $scope.number = function() {
                    var total = 0;

                    for(var i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;

                    }

                    return total;

                };
            }
        }
    });