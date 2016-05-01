'use strict';

angular.module('baobabShop')
    .controller('KontaktCtrl', function ($scope, $rootScope, $sce, $http,$location) {
                     $("html, body").animate({ scrollTop: "250px" });


        $scope.kwiaty = [];
       
    
    $rootScope.currentPath = $location.path();
    ///mail
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; 
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; 
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            console.log('test');
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { 
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Błąd <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Proszę wypełnij wszystkie pola.';
            $scope.result='bg-danger';
        }
    }
    
    //mapa
    $scope.map = {center: {latitude: 49.794058, longitude: 19.039016 }, zoom: 17 }
        $scope.options = {scrollwheel: false};
        $scope.marker = {
            coords: {
                latitude: 49.794058,
                longitude: 19.039016
                
            },
            show: false,
            id: 0
        };

        $scope.windowOptions = {
            visible: true
        };
                    

        $scope.title = "Studio florystyczne Baobab";
        $scope.adress = "ul. Św. Andrzeja Boboli ";
        $scope.phone = "43-316 Bielsko - Biała";

    });