module.exports = function (app, db) {
    var developerModel = require ("./models/developer/developer.model.server.js")(db);
    var developerService = require("./services/developer.service.server.js")(app, developerModel);

    var applicationService = require("./services/application.service.server.js")(app);
};