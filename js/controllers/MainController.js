app.controller('MainController', function($scope) {
    $scope.tasklist1 = [{task1:'Sample Task'}];
    $scope.tasklist2 = [{task2:'Sample Task'}];
    $scope.tasklist3 = [{task3:'Sample Task'}];

    $scope.addTask1 = function() {
        $scope.tasklist1.push({task1:$scope.input_text1});
        $scope.input_text1 = "";
    };
    $scope.addTask2 = function() {
        $scope.tasklist2.push({task2:$scope.input_text2});
        $scope.input_text2 = "";
    };
    $scope.addTask3 = function() {
        $scope.tasklist3.push({task3:$scope.input_text3});
        $scope.input_text3 = "";
    };
});
