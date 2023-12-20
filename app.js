(function(){
    'use strict';
    angular.module('myApp',[])
    .controller('myController',MyController);
    MyController.$inject = ['$scope'];
    function MyController ($scope){
        $scope.onceCounter = 0;
        $scope.counter = 0;
         $scope.countOnce = function(){
            $scope.onceCounter = 1;
        }
        $scope.logWatchers = function(){
            console.log($scope.$$watchersCount);
        }
        $scope.upCounter = function(){
            $scope.counter++;
        }
        $scope.$watch(function(){
            console.log('Digit loop fired')
        })
        // $scope.$watch('onceCounter',function(newValue,oldValue){
        //     console.log('Once Counter old value',oldValue);
        //     console.log('Once Counter new value',newValue);
        // })
        // $scope.$watch('counter',function(newValue,oldValue){
        //     console.log('Counter old value',oldValue);
        //     console.log('Counter New Value',newValue);
        // })
    };
})();