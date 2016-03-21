module.exports = function (app, db) {
    var developerModel = require ("./models/developer/developer.model.server.js")(db);
    var developerService = require("./services/developer.service.server.js")(app, developerModel);

    var applicationModel = require("./models/application/application.model.server.js")();
    var applicationService = require("./services/application.service.server.js")(app, applicationModel);

    // 3.0
    var pageService = require("./services/page.service.server.js")(app, applicationModel);
};