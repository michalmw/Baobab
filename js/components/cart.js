'use strict';
angular
    .module('baobabShop')
    .factory('cart', function($cookies, $rootScope){
        
     
                        
                        
                        
        return{
            addProduct: function(id, name, price, photo) {
                
                var cartData = $cookies.getObject("cartData");
                
                        var addedToExistingItem = false;
                        for(var i=0; i< cartData.length; i++) {
                            if(cartData[i].name == name){
                                cartData[i].count++;
                                addedToExistingItem = true;
                                break;
                            }
                        }
                        if(!addedToExistingItem) {
                            //pierwszy raz cos dodajemy ;-)
                            if(!angular.isObject(cartData))
                                cartData = [];
                                
                            cartData.push({
                                count: 1, price: price, name: name, photo: photo
                            });
                           
                        }
                        $cookies.putObject("cartData", cartData);
                    $rootScope.change++;
                       
            },
              removeProduct: function(name) {
                //   var cardData = [];
                   var cartData = $cookies.getObject("cartData");
                    for(var i = 0; i < cartData.length; i++) {
                        if(cartData[i].name == name) {
                            cartData.splice(i,1);
                            // break;
                        }
                    }
                    $cookies.putObject("cartData", cartData);
                    $rootScope.change++;
                },
            getProducts: function() {
                
                    var cartData = $cookies.getObject("cartData");
                    if(!angular.isDefined(cartData))
                        $cookies.putObject("cartData", []);
                        
                    return (angular.isDefined(cartData) ? cartData : []);
                }
        
        }
});