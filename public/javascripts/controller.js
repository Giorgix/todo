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
    var todo = {
      'content': $scope.todoName
    }
    $scope.todos.push(todo);
  }
  
  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
  }
});
