(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($http, $scope, $rootScope, FormService, UserService) {

        $scope.setForms = setForms;
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.updateForm = updateForm;
        $scope.selectForm = selectForm;

        (function init() {
            setForms();
        })();

        function setForms(){
            FormService
                .findAllFormsForUser($rootScope.currentUser._id)
                .then(function(res) {
                $scope.userForms = res.data;
            });
        }

        function addForm(newForm) {
            var form = {"title": newForm.title};
            FormService
                .createFormForUser($rootScope.currentUser._id, form)
                .then(function(res) {
                    var newForm = res.data;
                setForms();
                $scope.editForm = {"title": newForm.title, "_id": newForm._id, "forms": newForm.forms, "userId": res.userId};
            });

        }

        function updateForm(newForm) {
            FormService
                .updateFormById(newForm._id, newForm)
                .then(function (res) {
                    setForms();
                });
        }


        function deleteForm(index) {
            var form = $scope.userForms[index];
            FormService
                .deleteFormById(form._id, updateUserForms)
                .then(function(res) {
                    setForms();
                })
        }

        function selectForm(index) {
            var selectedForm = $scope.userForms[index];
            $scope.editForm = {"title" :selectedForm.title, "userId": selectedForm.userId, "_id": selectedForm._id}
        }


        function updateUserForms(res) {
            // A default callback function for updating this user's forms after some action
            // This is helpful because the FormService return everybody's forms
            setForms();
        }
    }
})();