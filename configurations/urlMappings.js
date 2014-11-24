module.exports.initUrlMappings=function(){
    _app.get("/userlist",_Controllers.userController.getUserList);
    _app.get("/",function(req,res){
        res.render("index");
    });
};