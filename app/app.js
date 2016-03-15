module.exports = function (app, db) {
    var developerModel = require ("./models/developer/developer.model.server.js")(db);
    var developerServcie = require("./services/developer.service.server.js")(app, developerModel);
};