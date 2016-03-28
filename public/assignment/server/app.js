
module.exports = function(app) {

    /*var userModel = require("./models/user.model.js")();
    var formModel = require("./models/form.model.js")();

    var FieldService = require("./services/field.service.server.js")(app, formModel);
    var FormService = require("./services/form.service.server.js")(app, formModel);
    var UserService = require("./services/user.service.server.js")(app, userModel);*/

    var userModel = require(__dirname + '/models/user.model.js')();
    require(__dirname + '/services/user.service.server.js')(app, userModel);
    var formModel = require(__dirname + '/models/form.model.js')();
    require(__dirname + '/services/form.service.server.js')(app, formModel);
    require(__dirname + '/services/field.service.server.js')(app, formModel);

   };