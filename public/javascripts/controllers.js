var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoCtrl', function($scope) {
  $scope.priorityOpts = ['all', 'high', 'normal', 'low'];
  $scope.statusOpts = ['all', 'todo', 'done'];
  $scope.todos = [
    {
      content: 'first todo',
      completed: false,
      priority: 'normal'
      
    },
    {
      content: 'second todo',
      completed: false,
      priority: 'high'
    },
    {
      content: 'third todo',
      completed: false,
      priority: 'low'
    }
  ]
  $scope.addTodo = function() {
    var newTodo = {
      content: $scope.newTodo.trim(),
      completed : false,
      priority: $scope.priorityOpt
    };
    if(!newTodo.content) {
      return;
    }
    $scope.todos.push(newTodo);
    $scope.newTodo = '';
  }
  
  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
  }
});
