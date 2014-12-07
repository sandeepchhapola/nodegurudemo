module.exports.initGlobals = function () {

    var config = require('../configurations/config.json'),
        mongoose = require('mongoose'),
        fs = require('fs'),
        path = require('path'),
        express = require('express'),
        http = require('http'),
        app = express(),
        Services = {},
        Controllers = {};

    global.__defineGetter__("_config", function () {
        return config;
    });

    global.__defineGetter__("_express", function () {
        return express;
    });

    global.__defineGetter__("_app", function () {
        return app;
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

    global.__defineGetter__("_http", function () {
        return http;
    });

    global.__defineGetter__("_mongoose", function () {
        return mongoose;
    });

    global.__defineGetter__("_Services", function () {
        return Services;
    });

    global.__defineGetter__("_Controllers", function () {
        return Controllers;
    });

    var servicesControllersInteIntegration = function (propertiesObj, propertiesUrl) {
        var fileList = _fs.readdirSync(propertiesUrl);
        fileList.forEach(function (file) {
            var fileUrl = _path.join(propertiesUrl, file);
            var isDirectory = _fs.lstatSync(fileUrl).isDirectory();
            if (!isDirectory) {
                var propertyName = file.replace(".js", '');
                Object.defineProperty(propertiesObj, propertyName, {
                    get: function () {
                        return require(fileUrl);
                    }
                });
            }
        });
    };

    var servicesPath = _path.join(_appBaseUrl, "server/services");
    var controllersPath = _path.join(_appBaseUrl, "server/controllers");

    servicesControllersInteIntegration(_Services, servicesPath);
    servicesControllersInteIntegration(_Controllers, controllersPath);

};
