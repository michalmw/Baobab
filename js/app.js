'use strict';

angular
    .module('baobabShop', [
        'ngAnimate',
        'ngCookies',
        'ui.bootstrap',
        'ngRoute',
        'uiGmapgoogle-maps'
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
                    controller: 'GaleriaCtrl'
                })
                .when('/kontakt', {
                    templateUrl: 'views/static/kontakt.html',
                    controller: 'KontaktCtrl'
                })
                .when('/dodaj-kwiat', {
                    templateUrl: 'views/tmp/dodaj.html',
                    controller: 'dodajCtrl'
                })
                .when('/sposob-platnosci', {
                    templateUrl: 'views/static/sposob-platnosci.html',
                    controller: 'sposobPlatnosciCtrl'
                });

    }).run(function($location, $rootScope) {
        
        // $rootScope.go = function (path) {
        //       $location.path(path);
        // };
        $rootScope.change = 1;
            
    }).config(['$httpProvider',function ($httpProvider) {

        // $httpProvider.defaults.useXDomain = true;
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]) ;