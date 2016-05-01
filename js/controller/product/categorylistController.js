'use strict';

angular
    .module('baobabShop')
    .controller('categoryListCtrl', function($scope, $http, link, cart, checkout, $location,$rootScope) {

                    $("html, body").animate({ scrollTop: "250px" });


        $scope.subcategory = [
           {name:'okolicznościowe', category: 'Bukiety'},
           {name:'koktajlowe', category: 'Bukiety'},
           {name:'egzotyczne',  category: 'Bukiety'},
           {name:'kwiatowe', category: 'Kosze'},
           {name:'łączone: kwiaty, słodycze, alkohol, upominki itp', category: 'Kosze'},
           {name:'róże', category:'Kreator bukietów'},
           {name:'tulipany', category:'Kreator bukietów'},
           {name:'bukiety ślubne', category:'Florystyka ślubna'},
           {name:'dekoracja samochodow', category:'Florystyka ślubna'},
           {name:'dekoracja sal i kościołów', category:'Florystyka ślubna'},
           {name:'palmy',  category:'Florystyka żałobna'},
           {name:'wieńce',category:'Florystyka żałobna'},
           {name:'kompozycje na urny', category:'Florystyka żałobna'}

        ];
        $scope.subshow = false;
        $scope.wlasnyadres = true;
        // $scope.test = 'Bukiety';
        $scope.info = function(info) {
            // $scope.subshow = false;
            // if(info == 'Bukiety') {
            //     $scope.subshow = true;
            // } else if(info == 'Kosze') {
            //     $scope.subshow = true;
            // } else if(info == 'Kreator bukietów') {
            //     $scope.subshow = true;
            // } else if(info =='Florystyka ślubna') {
            //     $scope.subshow = true;
            // } else if(info =='Florystyka żałobna') {
            //     $scope.subshow = true;
            // } else {
            //     $scope.subshow = false;
            // }
            $scope.test = info;
            $scope.subshow = true;

        };

         $http
            .get(link)
            .then(function(data) {
                $scope.kwiaty = data.data;
            });

    });