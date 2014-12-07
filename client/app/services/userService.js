angular.module('nodeguru')
    .service("userService",function(){
        this.getUser=function(){
            console.log("user service run successfully");
        }
    });