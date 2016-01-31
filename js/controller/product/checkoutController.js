'use strict';

angular
    .module('baobabShop')
    .controller('checkoutCtrl', function($scope, $http, link, cart, checkout) {


        $scope.wlasnyadres = true;


        $scope.send = function(person) {

            var person = person;
            var zamowienia = cart.getProducts();
            person.products = zamowienia;
            console.log(person);
            $http
                .post(checkout, person)
                .then(function(data) {
                    console.log('dodano');
                });

        };

    });