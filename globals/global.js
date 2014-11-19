module.exports.initGlobals = function () {
    var config = require('../configurations/config.json');
    var mongoose = require('mongoose');
    var fs = require('fs');
    var path = require('path');

    global.__defineGetter__("_config", function () {
        return config;
    });

    global.__defineGetter__("_appBaseUrl", function () {
        return process.env.PWD;
    });

    global.__defineGetter__("_fs", function () {
        return fs;
    });

    global.__defineGetter__("_path", function () {
        return path;
    });

    global.__defineGetter__("_mongoose", function () {
        return mongoose;
    });
};