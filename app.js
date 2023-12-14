(function(){
    'use strict';
    angular.module('myApp',[])
    .controller('myController',function($scope){
        $scope.name = "";
        $scope.numericValue = 0;

        $scope.displayValue = function(){
            $scope.numericValue = caculateValue($scope.name);
        };
        function caculateValue(string){
            var totalNumeric = 0;
            for(var i = 0;i<string.length;i++){
                totalNumeric += string.charCodeAt(i);
            };
            return totalNumeric;
        }
    })
})();