(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $rootScope, FormService) {

        $scope.setForms = setForms;
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.updateForm = updateForm;
        $scope.selectForm = selectForm;

        (function init() {
            setForms();
        })();

        function setForms() {
            FormService.findAllFormsForUser($rootScope.currentUser._id, function(res) {
                $scope.userForms = res;
            });
        }

        function addForm(newForm) {
            var form = {"title": newForm.title};
            FormService.createFormForUser($rootScope.currentUser._id, form, function(res) {
                setForms();
                $scope.editForm = {"title": res.title, "_id": res._id, "userId": res.userId};
            });

        }

        function updateForm(newForm) {
            // The form with the given ID has been selected by the user
            // Update the form the user selected, with this new form
            FormService.updateFormById(newForm._id, newForm, updateUserForms);
        }


        function deleteForm(formId, formIndex) {
            FormService.deleteFormById(formId, formIndex, updateUserForms);
        }

        function selectForm(formId, formIndex) {
            var selectedForm = FormService.findFormById(formId);
            $scope.editForm = {"title" :selectedForm.title, "userId": selectedForm.userId, "_id": selectedForm._id}
        }


        function updateUserForms(res) {
            // A default callback function for updating this user's forms after some action
            // This is helpful because the FormService return everybody's forms
            setForms();
        }
    }
})();