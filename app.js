(function(){
    'use strict';
    angular.module('myApp',[])
    .controller('myController',MyController);
    MyController.$inject =['$scope'];
    function MyController ($scope){
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.showNumberOfWatchers = function(){
            console.log('# watch counter',$scope.$$watchersCount);
        };
        $scope.counterOnce = function(){
            $scope.onceCounter = 1;
        }
        $scope.upCounter = function(){
            $scope.counter++;
        }
        $scope.$watch('onceCounter',function(newvalue,oldvalue){
            console.log('Old Value',oldvalue);
            console.log('new value',newvalue);
        });

        $scope.$watch('counter',function(newValue,oldValue){
            console.log('counter old vale',oldValue);
            console.log('counter new value',newValue);
        })
    };
})();