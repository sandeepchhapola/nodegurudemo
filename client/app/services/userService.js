angular.module('nodeGuru')
    .service("userService",function(){
        this.getUser=function(){
            console.log("user service run successfully");
        }
    });