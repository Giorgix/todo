var app = angular.module('todoApp', []);


app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {
      content: 'first todo',
      completed: false
      
    },
    {
      content: 'second todo',
      completed: false
    },
    {
      content: 'third todo',
      completed: false
    }
  ]
  $scope.addTodo = function() {
    var newTodo = {
      content: $scope.newTodo.trim()
    }
    $scope.todos.push(newTodo);
  }
  
  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
  }
});
