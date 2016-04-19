var forms = require("./form.mock.json");

var q = require("q");

var mongoose = require("mongoose");

module.exports = function(db) {

    // load form schema
    var formSchema = require('./form.schema.server.js')(mongoose);

    // create form model from schema
    var formModel = mongoose.model("Form", formSchema);

    // load field schema
    var fieldSchema = require('./field.schema.server.js')(mongoose);

    // create field model from schema
    var fieldModel = mongoose.model("Field", fieldSchema);

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
        //form._id = (new Date()).getTime();
        form.userId = userId;
        //forms.push(form);
        //return form;

        var deferred = q.defer();

        formModel.create(form, function (err, doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;

    }

    function findAllFormsForUser(userId) {
        var userForms = [];
        /*for (var i = 0; i < forms.length; i++) {
            if (forms[i].userId == userId) {
                userForms.push(forms[i]);
            }
        }
        return userForms;*/

        var deferred = q.defer();

        formModel.find({userId: userId}, function(err,doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
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
        //forms.splice(target,1);
        //return forms;

        var deferred = q.defer();

        formModel.remove({_id: id}, function(err,doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function updateFormById(id, newForm) {
        var target = findFormIndexById(id);
        var newForm2 = {"title": newForm.title, "userId": newForm.userId, "_id": newForm._id};
        //forms[target] = newForm2;
        //return newForm2;
        var deferred = q.defer();

        formModel.update({_id: id}, {$set: newForm}, function(err,doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findFormByTitle(title) {
        /*var result;
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];
            if (form.title == title) {
                result = form;
                break;
            }
        }
        return result;*/
        var deferred = q.defer();

        formModel.find({"title": title}, function(err,doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;

    }

    function findFormById(id) {
        /*var result;
        for (var i = 0; i < forms.length; i++) {
            if (forms[i]._id == id) {
                result = forms[i];
                break;
            }
        }
        return result;*/
        var deferred = q.defer();

        formModel.find({"_id": id}, function(err,doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;

    }

    function findAllFieldsForForm(formId) {
        var deferred = q.defer();

        //var form = findFormById(formId);
        //return form.fields;
        formModel
            .find({"_id": formId}, function(err,doc) {
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(doc.fields);
            }
        });
        return deferred.promise;
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
        updateFormById(formId, form);
        return form.fields;
    }

    function createFieldForForm(formId, field) {
        var deferred = q.defer();

        formModel
            .findById(formId)
            .then(function(doc) {
                doc.fields.push(fields);
                return doc.save();
            });
        //updateFormById(formId, form);
        return deferred.promise;
        //form.fields.push(field);
        //return form.fields;
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
        updateFormById(formId, form);
        return form.fields;
    }
};