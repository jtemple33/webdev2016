
module.exports = function(app, formModel){

    app.get("/api/assignment/user/:userId/form", findAllFormsForUser);
    app.get("/api/assignment/form/:formId", findFormById);
    app.delete("/api/assignment/form/:formId", deleteFormById);
    app.post("/api/assignment/user/:userId/form", createFormForUser);
    app.put("/api/assignment/form/:formId", updateFormById);

    function findAllFormsForUser(req, res) {
        var userId = req.params.userId;
        res.json(formModel.findAllFormsForUser(userId));
    }

    function findFormById(req, res) {
        var formId = req.params._id;
        res.json(formModel.findFormById(formId));
    }

    function deleteFormById(req, res) {
        var formId = req.params._id;
        res.json(formModel.deleteFormById(formId));
    }

    function createFormForUser(req, res) {
        var user = req.params.userId;
        var newForm = req.body;
        res.json(formModel.createFormForUser(user, newForm));
    }

    function updateFormById(req, res) {
        var form = req.body;
        var formId = form._id;
        res.json(formModel.updateFormById(formId, form));
    }


};