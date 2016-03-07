(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $rootScope, FormService) {

        $scope.setForms = setForms;
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.updateForm = updateForm;
        $scope.selectForm = selectForm;

        function setForms() {
            FormService.findAllFormsForUser($rootScope.currentUser._id, function(res) {
                $scope.userForms = res;
            });
        }

        function addForm(newForm) {
            var newForm = {"title": newForm.title};
            FormService.createFormForUser($rootScope.currentUser._id, newForm, function(res) {
                setForms();
                $scope.editForm = {"title": res.title, "_id": res._id, }
            }
            )

        }

    }
})();