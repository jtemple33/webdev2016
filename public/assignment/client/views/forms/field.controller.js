(function () {
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($scope, $routeParams, FieldService) {
        var formId = $routeParams["formId"];
        var userId = $routeParams["userId"];

        $scope.addField = addField;
        $scope.removeField = removeField;


        function init() {
            FieldService
                .getFieldsForForm(formId)
                .then(function (response) {
                    console.log(response.data);
                    $scope.fields = response.data;
                })

        }

        init();

        function addField(type) {
            var field = {
                label: "",
                placeholder: "",
                type: ""
            };

            if (type == "TEXT") {
                field.type = type;
                field.label = "New Text Field";
                field.placeholder = "New Field";
            }

            else if (type == "TEXTAREA") {
                field.type = type;
                field.label = "New Text Field";
                field.placeholder = "New Field";
            }

            else if (type == "DATE") {
                field.type = type;
                field.label = "New Date Field";
                field.placeholder = "New Field";
            }

            else if (type == "OPTIONS") {
                field.type = type;
                field.label = "New Dropdown";
                field.options = [{
                    "label": "Option 1",
                    "value": "OPTION_1"
                }, {
                    "label": "Option 2",
                    "value": "OPTION_2"
                }, {
                    "label": "Option 3",
                    "value": "OPTION_3"
                }]
            }

            else if (type == "CHECKBOX") {
                field.type = type;
                field.label = "New Checkboxes";
                field.options = [{
                    "label": "Option A",
                    "value": "OPTION_A"
                }, {
                    "label": "Option B",
                    "value": "OPTION_B"
                }, {
                    "label": "Option C",
                    "value": "OPTION_C"
                }]
            }

            else if (type == "RADIO") {
                field.type = type;
                field.label = "New Radio Buttons";
                field.options = [{
                    "label": "Option X",
                    "value": "OPTION_X"
                }, {
                    "label": "Option Y",
                    "value": "OPTION_Y"
                }, {
                    "label": "Option Z",
                    "value": "OPTION_Z"
                }]
            }

            FieldService
                .createFieldForForm(formId, field)
                .then(function (response) {
                    $scope.fields = response.data;
                })


        }

        function removeField(index) {
            var field = $scope.fields[index];
            FieldService
                .deleteFieldFromForm(formId, field._id)
                .then(function (response) {
                    $scope.fields = response.data;
                });
        }


    }
})();