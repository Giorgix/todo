var app = angular.module('todoApp', []);


app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {
      'content': 'first todo'
    },
    {
      'content': 'second todo'
    },
    {
      'content': 'third todo'
    }
  
  ]
});
