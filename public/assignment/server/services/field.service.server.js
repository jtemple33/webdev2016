
module.exports = function(app, formModel) {

    app.get("/api/assignment/form/:formId/field/:fieldId", findFieldByFormId);
    app.get("/api/assignment/form/:formId/field", findAllFieldsForForm);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldByFormId);
    app.post("/api/assignment/form/:formId/field", createFieldForForm);

    function findFieldByFormId(req, res) {
        var userId = req.params.userId;
        var fieldId = req.params.fieldId;
        //res.json(formModel.findFieldByFormId(formId, fieldId));
        formModel
            .findFieldByFormId(formId, fieldId)
            .then(
                function(doc){
                    res.json(doc);
                },
                   function(error){
                    res.status(400).send(error);
                }
            );
    }

    function findAllFieldsForForm(req, res) {
        var formId = req.params.formId;
        //res.json(formModel.findAllFieldsForForm(formId));
        formModel
            .findAllFieldsForForm(formId)
            .then(
                function(doc) {
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }

    function deleteFieldByFormId(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        //res.json(formModel.deleteFieldByFormId(formId, fieldId));
        formModel
            .deleteFieldByFormId(formId, fieldId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }

    function createFieldForForm(req, res) {
        var formId = req.params.formId;
        //var field;
        //res.json(formModel.createFieldForForm(formId, field));

        var field = {
            'label': req.param('label'),
            'type': req.param('type'),
            'placeholder': req.param("placeholder"),
            'options': req.param("options")
        };

        formModel
            .createFieldForForm(formId, field)
            /*.then(
                function(doc){
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            )*/;
    }

    function updateFieldByFormId(req, res) {
        var field = req.body;
        var formId = req.params.formId;
        //res.json(formModel.updateFieldByFormId(formId, field));
        formModel
            .updateFieldByFormId(formId, field)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }


    };