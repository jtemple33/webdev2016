
module.exports = function(app, formModel){

    app.get("/api/assignment/user/:userId/form", findAllFormsForUser);
    app.get("/api/assignment/form/:formId", findFormById);
    app.delete("/api/assignment/form/:formId", deleteFormById);
    app.post("/api/assignment/user/:userId/form", createFormForUser);
    app.put("/api/assignment/form/:formId", updateFormById);

    function findAllFormsForUser(req, res) {
        var userId = req.params.userId;
        //res.json(formModel.findAllFormsForUser(userId));
        formModel
            .findAllFormsForUser(userId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }

    function findFormById(req, res) {
        var formId = req.params._id;
        //res.json(formModel.findFormById(formId));
        formModel
            .findFormById(formId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }

    function deleteFormById(req, res) {
        var formId = req.params._id;
        //res.json(formModel.deleteFormById(formId));
        formModel
            .deleteFormById(formId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }

    function createFormForUser(req, res) {
        var user = req.params.userId;
        var newForm = req.body;
        //res.json(formModel.createFormForUser(user, newForm));
        formModel
            .createFormForUser(user, newForm)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }

    function updateFormById(req, res) {
        var form = req.body;
        var formId = form._id;
        //res.json(formModel.updateFormById(formId, form));
        formModel
            .updateFormById(formId, form)
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