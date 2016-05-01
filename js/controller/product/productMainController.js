'use strict';

angular
    .module('baobabShop')
    .controller('productMainCtrl', function($scope, $routeParams, link, $http, cart, $location,$rootScope) {
                             $("html, body").animate({ scrollTop: "250px" });

        $http
            .post(link + '/' + $routeParams.id)
            .then(function(data) {
                $scope.kwiat = data.data;
            });
      $scope.dodaj = function(item) {
            cart.addProduct(item.id, item.name, item.price, item.photo);
        };

    });