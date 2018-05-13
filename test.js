var main = angular.module('angular-test', ['angularResizable']);

main.controller('TestCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.test = "Helloe World";
    $scope.content = 'Hello World';
    $scope.$on("angular-resizable.resizeStart", function (event, args) {
        //alert('Woooohoooo!');
    });
}]
);