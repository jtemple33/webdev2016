(function(){
    angular
        .module("238Hem")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, UserService, ReviewService) {

        $scope.update = update;
        $scope.deleteReview = deleteReview;

        function init() {
            getReviews($rootScope.currentUser);
            //console.log($rootScope.currentUser);
        }

        init();

        function update(user) {
            UserService
                .updateUser(user._id, user)
                .then(function(res) {
                $rootScope.currentUser = user;
                alert("You've successfully updated your profile!")
            });
        }

        function getReviews(user) {
            ReviewService
                .getReviewsByUserId(user._id)
                .then(function (response) {
                    $scope.reviews = response.data;
                    console.log(response.data);
                })
        }

        function deleteReview(review) {
            ReviewService
                .deleteReview(review)
                .then(function (response) {
                    init();
                })
        }
    }

})();