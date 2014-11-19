module.exports.initDomains = function () {
    var domainList = _fs.readdirSync(_path.join(_appBaseUrl, 'server/domains'));
    _mongoose.connect(_config.common.dataSource.mongo.url, {poolSize: _config.common.dataSource.mongo.poolSize}, function (err) {
        if (err)
            console.log("ERROR During Creating Connection to mongo server", err);
    });
    domainList.forEach(function (domain) {
        var domainUrl = _path.join(_appBaseUrl, 'server/domains', domain);
        var isDirectory = _fs.lstatSync(domainUrl).isDirectory();
        if (!isDirectory) {

            var domainName = domain.replace(".js", ''),
                domainSchema = new _mongoose.Schema(require(domainUrl)),
                domainModel = _mongoose.model(domainName, domainSchema);

            global.__defineGetter__(domainName, function () {
                return domainModel;
            });
        }
    });
};

module.exports.initSuperUser = function () {
    console.log("Save SuperUser to db");
    Users.findOne({"userName": _config.common.superUser.userName},function(err,user){
        if (err) {
            console.log("Error in finding super user");
        }else if(user) {
            console.log("Super User Already Exists");
        }else if(!user) {
            new Users({
                "userName": _config.common.superUser.userName,
                "password": _config.common.superUser.password,
                "salt": _config.common.superUser.salt
            }).save(function (err, result) {
                    if (err) {
                        console.log("User Not Saved Sucessfully");
                    } else {
                        console.log("User Saved Sucessfully", result);
                    }
                });
        }
    });
};