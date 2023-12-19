(function(){
    'use strict';
    angular.module('diApp',[])
    .controller('DIController',function($scope,$filter){
        $scope.name = "Pizza";

        function init(some){
            var upCase = $filter('uppercase');
            $scope.name = upCase(some);
        }

        $scope.uperCase = function(){
            init($scope.name);
        }


    });
})();