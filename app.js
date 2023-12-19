(function(){
'use strict';
angular.module('myApp',[])
.controller('myController',function($scope,$filter){
    $scope.name = 'STEVE JOBS';
    $scope.msgPhoto = 'msg1';
    $scope.phoneCost = .34;
    $scope.cost = 0;
    $scope.sayMessage = function(){
        var output = $filter('uppercase')("creativity is just connecting things")
        return output;
    }
    $scope.filter = function(){
        var filt = $filter('currency')($scope.cost);
        $scope.cost = filt;
    }
    var i = 0;
    $scope.showPhoto = function(){
      $scope.msgPhoto = "msg2";
    }
})
})();