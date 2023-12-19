(function(){
'use strict';
angular.module('myApp',[])
.controller('myController',function($scope){
    $scope.name = 'STEVE JOBS';
    $scope.msgPhoto = 'msg1';
    $scope.sayMessage = function(){
        return "CREATIVITY IS JUST CONNECTING THINGS";
    }
    var i = 0;
    $scope.showPhoto = function(){
      $scope.msgPhoto = "msg2";
    }
})
})();