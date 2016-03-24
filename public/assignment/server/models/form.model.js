var forms = require("./form.mock.json");

module.exports = function() {

    var service = {
        createFormForUser: createFormForUser,
        findAllFormsForUser: findAllFormsForUser,
        deleteFormById: deleteFormById,
        updateFormById: updateFormById,
        findFormById: findFormById,
        findFormByTitle: findFormByTitle
    };

    return service;

    function createFormForUser(userId, form) {
        form._id = (new Date()).getTime();
        form.userId = userId;
        forms.push(form);
        return form;
    }

    function findAllFormsForUser(userId) {
        var userForms = [];
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if (form.userId == userId) {
                userForms.push(form);
            }
        }
        return userForms;
    }

    function findFormIndexById(id) {
        var index = -1;
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if (form._id == id) {
                index = i;
                break;
            }
        }
        return index;
    }

    function deleteFormById(id){
        var target = findFormIndexById(id);
        forms.splice(target,1);
        return forms;
    }

    function updateFormById(id, newForm) {
        var target = findFormIndexById(id);
        var newForm2 = {"title": newForm.title, "userId": newForm.userId, "_id": newForm._id};
        forms[target] = newForm2;
        return newForm2;
    }

    function findFormByTitle(title) {
        var result;
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if (form.title == title) {
                result = form;
                break;
            }
        }
        return result;
    }

    function findFormById(id) {
        var result;
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if (form._id == id) {
                result = form;
                break;
            }
        }
        return result;
    }

};