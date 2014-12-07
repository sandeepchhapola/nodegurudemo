angular.module('nodeguru')
    .controller("mainController",["$scope","userService",function($scope,userService){
        console.log("main controller run successfully");
        userService.getUser();
    }]);
