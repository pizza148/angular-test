(function(){
    'use strict';
    angular.module('myApp',[])
    .controller('myController',MyController);
    MyController.$inject = ['$scope','$timeout'];
    function MyController ($scope,$timeout){
        $scope.counter = 0;
        $scope.upCounter = function(){
            $timeout(function(){
                $scope.counter++;
                console.log('Counter Incremented!');
            },2000);
        }
        


        // $scope.upCounter = function(){
        //     setTimeout(()=>{
        //         $scope.$apply(()=>{
        //             $scope.counter++;
        //             console.log('Counter Incremented!');
        //         })
        //     },200);
        // }


        // $scope.upCounter = function(){
        //     setTimeout(()=>{
        //         $scope.counter++;
        //         console.log('Counter Incremented!');
        //         $scope.$digest();
        //     },2000);
        // }
    }
})();