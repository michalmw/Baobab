'use strict';

angular
    .module('baobabShop')
    .controller('cartCtrl', function($scope, $http, link, cart) {

        $scope.products = cart.getProducts();

    });