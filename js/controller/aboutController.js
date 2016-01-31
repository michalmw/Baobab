'use strict';

angular
    .module('baobabShop')
    .controller('aboutCtrl', function($scope, $http, link, cart, $rootScope, $location) {

        $location.hash('myCarousel');
        $rootScope.main = false;

        $scope.dodaj = function(item) {

            cart.addProduct(item.id, item.name, item.price, item.photo);
        };
    });