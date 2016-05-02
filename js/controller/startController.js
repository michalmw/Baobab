'use strict';

angular
    .module('baobabShop')
    .controller('startCtrl', function($scope, $http, link, cart, $rootScope,$location) {


    $("html, body").animate({ scrollTop: "0px" }, 0);




        $scope.hide = function(pos) {
            console.log('ss: ' + pos);
            $('.boxx a .shadow').css('background','rgba(255,153,0,0.65)');
            $('.boxx_'+pos+' a .shadow').css('background','rgba(255,153,0,0.09)');
            $('.boxx_'+pos+' a h3').css('text-shadow','3px 2px 13px rgba(0, 0, 0, 1)');

        };
        $scope.show = function() {
            $('.boxx a .shadow').css('background','rgba(255,153,0,0.39)');
            $('.boxx a h3').css('text-shadow','none');

        };

        
        $http
            .get(link)
            .then(function(data) {
                console.log('call back + ', data);
                $scope.kwiaty = data.data;
            });

            function asd() {
                console.log('as');
            }
        $scope.dodaj = function(item) {

            cart.addProduct(item.id, item.name, item.price, item.photo);
            
            console.log('oobj:', cart.getProducts());
        };
    });