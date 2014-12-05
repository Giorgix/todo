var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoCtrl', function($scope) {
  $scope.priorityOpts = ['all', 'high', 'normal', 'low'];
  $scope.statusOpts = ['all', 'todo', 'done'];
  $scope.todos = JSON.parse(localStorage.getItem('todos') || '[]');

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
    localStorage.setItem('todos', JSON.stringify($scope.todos));
    $scope.newTodo = '';
  }
  
  $scope.saveEditedTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    console.log($scope.todos[todoIndex]);
    $scope.todos[todoIndex] = todo;
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  }

  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  }
});
