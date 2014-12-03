var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoCtrl', function($scope) {
  $scope.priorityOpts = ['all', 'high', 'normal', 'low'];
  $scope.statusOpts = ['all', 'todo', 'done'];
  $scope.todos = JSON.parse(localStorage.getItem('todos') || '[]');
  $scope.statusOpt = localStorage.getItem('statusOpt') || 'all';
  $scope.priorityOpt = localStorage.getItem('priorityOpt') || 'all';

  $scope.statusOptChange = function(statusOpt) {
    localStorage.setItem('statusOpt', statusOpt);
  }
  $scope.priorityOptChange = function(priorityOpt) {
    localStorage.setItem('priorityOpt', priorityOpt);
  }

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
  
  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify($scope.todos));
  }
});
