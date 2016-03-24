
module.exports = function (app, fieldModel) {

    app.get("/api/assignment/form/:formId/field/:fieldId", findFieldByFormId);
    app.get("/api/assignment/form/:formId/field", findAllFieldsForForm);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldByFormId);
    app.post("/api/assignment/form/:formId/field", createFieldForForm);

    function findFieldByFormId(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.json(fieldModel.findFieldByFormId(formId, fieldId));
    }

    function findAllFieldsForForm(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.json(fieldModel.findFieldByFormId(formId, fieldId));
    }

    function deleteFieldByFormId(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.json(fieldModel.deleteFieldbyFormId(formId, fieldId));
    }

    function createFieldForForm(req, res) {
        var field = req.body;
        var formId = req.params.formId;
        field._id = (new Date).getTime();
        res.json(fieldModel.createFieldForForm(formId, field));
    }

    function updateFieldbyFormId(req, res) {
        var field = req.body;
        var formId = req.params.formId;
        res.json(fieldModel.updateFieldByFormId(formId, field));
    }


    };