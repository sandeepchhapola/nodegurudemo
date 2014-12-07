module.exports.getUserList=function(req,res){
    Users.find({},function(err,users){
        if(err){
            res.status(400).send(err).end();
        }
        res.status(200).send(users).end();
    });
};