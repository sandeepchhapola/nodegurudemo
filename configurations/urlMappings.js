module.exports.initUrlMappings=function(){
    _app.get("/userlist",_Controllers.userController.getUserList);
};