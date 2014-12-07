var bootstrape = require('../configurations/bootstrap'),
    globalVars = require('../globals/global'),
    urlMappings = require('../configurations/urlMappings');

globalVars.initGlobals();
bootstrape.initDomains();
bootstrape.initSuperUser();
urlMappings.initUrlMappings();

var _server = _http.createServer(_app)
    .on("error", function (err) {
        console.log(err);
    });

_server.listen(9300, function () {
    console.log('Server listening on port', _server.address().port);
})
    .on("error", function (err) {
        console.log(err);
    });