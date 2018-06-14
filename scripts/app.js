angular.module('calculatorApp', [])
  .controller('mainCtrl', function($scope){

    $scope.first="";
    $scope.second="";
    $scope.result="";
    $scope.operator= "";
    $scope.inputtoggle = true;
    $scope.showresult = false;

    $scope.getResult = function(operator){
      switch ($scope.operator) {
        case '+':
        $scope.result = $scope.first + $scope.second;
          break;
        case '-':
        $scope.result = $scope.first - $scope.second;
          break;
        case '*':
        $scope.result = $scope.first * $scope.second;
          break;
        case '/':
        $scope.result = $scope.first / $scope.second;
          break;
      }};
    });
