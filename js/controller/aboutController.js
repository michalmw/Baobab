'use strict';

angular
    .module('baobabShop')
    .controller('aboutCtrl', function($scope,cart) {
        $("html, body").animate({ scrollTop: "0px" }, 0);

        // $location.hash('myCarousel');
        
        // $rootScope.currentPath = $location.path();

        $scope.dodaj = function(item) {

            cart.addProduct(item.id, item.name, item.price, item.photo);
        };
    });