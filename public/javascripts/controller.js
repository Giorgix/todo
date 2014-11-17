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
  $scope.addTodo = function() {
    var newTodo = {
      'content': $scope.newTodo
    }
    $scope.todos.push(newTodo);
  }
  
  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
  }
});
