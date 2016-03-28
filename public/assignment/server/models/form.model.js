var forms = require("./form.mock.json");

module.exports = function() {

    var api = {
        createFormForUser: createFormForUser,
        findAllFormsForUser: findAllFormsForUser,
        deleteFormById: deleteFormById,
        updateFormById: updateFormById,
        findFormById: findFormById,
        findFormByTitle: findFormByTitle,
        findAllFieldsForForm: findAllFieldsForForm,
        findFieldByFormId: findFieldByFormId,
        deleteFieldByFormId: deleteFieldByFormId,
        createFieldForForm: createFieldForForm,
        updateFieldByFormId: updateFieldByFormId
    };

    return api;

    function createFormForUser(userId, form) {
        form.fields = [];
        form._id = (new Date()).getTime();
        form.userId = userId;
        forms.push(form);
        return form;
    }

    function findAllFormsForUser(userId) {
        var userForms = [];
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].userId == userId) {
                userForms.push(forms[i]);
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
            if (forms[i]._id == id) {
                result = forms[i];
                break;
            }
        }
        return result;
    }

    function findAllFieldsForForm(formId) {
        var form = findFormById(formId);
        return form.fields;
    }

    function findFieldByFormId(formId, fieldId) {
        var form = findFormById(formId);
        var field;
        for (var i = 0; i < form.fields.length; i++) {
            if (form.fields[i]._id = fieldId) {
            field = form.fields[i];
            break;
            }
        }
        return field;
    }

    function deleteFieldByFormId(formId, fieldId) {
        var form = findFormById(formId);
        var field;
        for (var i = 0; form.fields.length; i++) {
            if (form.fields[i]._id == fieldId) {
                field = form.fields[i];
                form.fields.splice(i, 1);
                break;
            }
        }
        return form.fields;
    }

    function createFieldForForm(formId, field) {
        var form = findFormById(formId);
        form.fields.push(field);
        return form.fields;
    }

    function updateFieldByFormId(formId, field) {
        var form = findFormById(formId);
        for (var i = 0; form.fields.length; i++) {
            if (form.fields[i]._id == field._id) {
                form.field[i].label = field.label;
                form.field[i].type = field.type;
                form.field[i].placeholder = field.placeholder;
                form.field[i].options = field.options;
            }
        }
        return form.fields;
    }
};