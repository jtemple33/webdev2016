
module.exports = function(app, formModel) {

    app.get("/api/assignment/form/:formId/field/:fieldId", findFieldByFormId);
    app.get("/api/assignment/form/:formId/field", findAllFieldsForForm);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldByFormId);
    app.post("/api/assignment/form/:formId/field", createFieldForForm);

    function findFieldByFormId(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.json(formModel.findFieldByFormId(formId, fieldId));
    }

    function findAllFieldsForForm(req, res) {
        var formId = req.params.formId;
        res.json(formModel.findAllFieldsForForm(formId));
    }

    function deleteFieldByFormId(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.json(formModel.deleteFieldByFormId(formId, fieldId));
    }

    function createFieldForForm(req, res) {
        var field = req.body;
        var formId = req.params.formId;
        field._id = (new Date).getTime();
        res.json(formModel.createFieldForForm(formId, field));
    }

    function updateFieldByFormId(req, res) {
        var field = req.body;
        var formId = req.params.formId;
        res.json(formModel.updateFieldByFormId(formId, field));
    }


    };