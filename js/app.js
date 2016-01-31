'use strict';

angular
    .module('baobabShop', [
        'ngAnimate',
        'ui.bootstrap',
        'ngRoute'
    ])
    .constant('link', 'http://baobab.projekty.surprise.design:3333/lista-kwiatow')
    .constant('checkout', 'http://baobab.projekty.surprise.design:2407/b-zamowienia')
    .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'startCtrl'
                })
                .when('/produkt/:id', {
                    templateUrl: 'views/product/info.html',
                    controller: 'productMainCtrl'
                })
                .when('/kategorie/:id', {
                    templateUrl: 'views/product/category-list.html',
                    controller: 'categoryListCtrl'
                })
                .when('/koszyk', {
                    templateUrl: 'views/cart/list.html',
                    controller: 'cartCtrl'
                })
                .when('/podsumowanie', {
                    templateUrl: 'views/cart/checkout.html',
                    controller: 'checkoutCtrl'
                })
                .when('/o-nas', {
                    templateUrl: 'views/static/o-nas.html',
                    controller: 'aboutCtrl'
                })
                .when('/oferta', {
                    templateUrl: 'views/static/oferta.html',
                    controller: 'startCtrl'
                })
                .when('/galeria', {
                    templateUrl: 'views/static/galeria.html',
                    controller: 'startCtrl'
                })
                .when('/kontakt', {
                    templateUrl: 'views/static/kontakt.html',
                    controller: 'startCtrl'
                })
                .when('/dodaj-kwiat', {
                    templateUrl: 'views/tmp/dodaj.html',
                    controller: 'dodajCtrl'
                })
                .when('/sposob-platnosci', {
                    templateUrl: 'views/static/sposob-platnosci.html',
                    controller: 'startCtrl'
                });

    }).run(function($location, $rootScope) {
        $rootScope.go = function (path) {
              $location.path(path);
        };
        $rootScope.myInterval = 5000;
        $rootScope.noWrapSlides = false;
        var slides = $rootScope.slides = [
                {
                    image: "/assets/img/wys.jpg",
                    text: ""
                }
            ];
    }).config(['$httpProvider',function ($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]) ;