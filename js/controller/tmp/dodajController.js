'use strict';

angular
    .module('baobabShop')
    .controller('dodajCtrl', function($scope, $http, link, cart, $rootScope, $location) {

        $location.hash('myCarousel');
        $rootScope.main = false;

        $scope.dodajj = function(item) {
            $http.post(link, item)
            .then(function(data) {
                    console.log('dodano');
                });


        };

        $scope.dodaj = function(item) {

            cart.addProduct(item.id, item.name, item.price, item.photo);
        };
    });