'use strict';

angular
    .module('baobabShop')
    .controller('categoryListCtrl', function($scope, $http, link, cart, checkout) {


        $scope.wlasnyadres = true;


         $http
            .get(link)
            .then(function(data) {
                $scope.kwiaty = data.data;
            });

    });