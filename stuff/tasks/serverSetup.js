module.exports.initServerSetup = function () {
    var bootstrape = require('../../configurations/bootstrap');
    var globalVars = require('../../globals/global');
    globalVars.initGlobals();
    bootstrape.initDomains();
    bootstrape.initSuperUser();
};
