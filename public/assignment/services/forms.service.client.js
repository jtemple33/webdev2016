(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {
        var forms = [];

        forms = [ {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234}];

        var api = {
            createFormForUser: createFormForUser,
            findFormById: findFormById,
            findFormIndexById: findFormIndexById,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };

        return api;

        function createFormForUser(userId, form, callback) {
            form._id = (new Date()).getTime();
            form.userId = userId;
            forms.push(form);
            callback(form);

        }

        function findFormById(id) {
            var res;
            for (var i = 0; i < forms.length; i++) {
                var form = forms[i];
                if(form._id == id) {
                    res = form;
                    break;
                }
            }
            return res;
        }


        function findFormIndexById(id) {
            // A helper to find the index of the form with the given id
            var index= -1;
            for (var i = 0; i < forms.length; i++) {
                var form = forms[i];
                if (form._id === id) {
                    index = i;
                    break;
                }
            }
            return index;
        }

        function findAllFormsForUser(userId, callback) {
            var userForms = [];
            for (var i = 0; i < forms.length; i++) {
                var form = forms[i];
                if (form.userId == userId) {
                    userForms.push(form);
                }
            }
            callback(userForms);
        }

        function deleteFormById(formId,callback) {
            var form = findFormIndexById(formId);
            forms.splice(form,1);
            callback(forms);
        }

        function updateFormById(formId, newForm, callback) {
            var form = findFormIndexById(formId);
            forms.splice(form,1,newForm);
            callback(newForm);
        }

    }

})();