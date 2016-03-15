(function(){
    angular
        .module("238Hem")
        .controller("StretchWhiteController", StretchWhiteController);

    function StretchWhiteController($scope, $rootScope, ReviewService) {

    $scope.setForms = setForms;
    $scope.addReview = addReview;
    $scope.getForms = getForms;
    $scope.getRatings = getRatings;
    $scope.addForm = addForm;
    $scope.deleteForm = deleteForm;
    $scope.updateForm = updateForm;
    $scope.selectForm = selectForm;

    (function init() {
        getForms();
    })();

    function getForms() {
        $scope.reviews = ReviewService.allReviews();
    }

        function getRatings(rating) {
            var star = '<scan class="glyphicon glyphicon-star"></scan>';
            if (rating > 0) {
            return star;
            }
        }

        function addReview(review) {
            ReviewService.addReview(review);
            getForms();
        }

    function setForms() {
        FormService.findAllFormsForUser($rootScope.currentUser._id, function(res) {
            $scope.forms = res;
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


    function deleteForm(formId, index) {
        FormService.deleteFormById(formId, updateUserForms);
    }

    function selectForm(formId, formIndex) {
        var selectedForm = FormService.findFormById(formId);
        $scope.editForm = {"title" :selectedForm.title, "userId": selectedForm.userId, "_id": selectedForm._id}
    }

}


})();