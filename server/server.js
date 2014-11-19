var serverSetup = require('../stuff/tasks/serverSetup');

serverSetup.initServerSetup();

var _server=_http.createServer(_app)
    .on("error", function (err) {
        console.log(err);
    });
_server.listen(3000, function () {
        console.log('Server listening on port',_server.address().port);
    })
    .on("error", function (err) {
        console.log(err);
    });