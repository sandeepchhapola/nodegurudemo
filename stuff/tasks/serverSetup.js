module.exports.initServerSetup = function () {
    var bootstrape = require('../../configurations/bootstrap');
    var globalVars = require('../../globals/global');
    var urlMappings = require('../../configurations/urlMappings');
    globalVars.initGlobals();
    bootstrape.initDomains();
    bootstrape.initSuperUser();
    urlMappings.initUrlMappings();
};
