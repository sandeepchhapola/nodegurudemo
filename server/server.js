var serverSetup = require('../stuff/tasks/serverSetup'),
    viewEngine = require("ejs-locals"),
    methodOverride = require('method-override'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    errorHandler = require('errorhandler');

serverSetup.initServerSetup();

// all environments
_app.set('port', process.env.PORT || 3000);
_app.set('views', _path.join(_appBaseUrl, "views"));
_app.engine('ejs', viewEngine);
_app.set('view engine', 'ejs');
_app.use(methodOverride());
_app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8' }));
_app.use(bodyParser.json());
_app.use(bodyParser.urlencoded({ extended: true }));
_app.use(multer());
_app.use(_express.static(_path.join(_appBaseUrl, 'client')));

// error handling middleware should be loaded after the loading the routes
if ('development' == _app.get('env')) {
    _app.use(errorHandler());
}

var _server = _http.createServer(_app)
    .on("error", function (err) {
        console.log(err);
    });
_server.listen(3000, function () {
    console.log('Server listening on port', _server.address().port);
})
    .on("error", function (err) {
        console.log(err);
    });