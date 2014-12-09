var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoCtrl', function($scope, todosStorage) {
  $scope.priorityOpts = ['all', 'high', 'normal', 'low'];
  $scope.statusOpts = ['all', 'todo', 'done'];
  $scope.todos = todosStorage.get();

    $scope.addTodo = function() {
    var newTodo = {
      content: $scope.newTodo.trim(),
      completed : false,
      priority: $scope.priorityChoice
    };
    if(!newTodo.content) {
      return;
    }
    $scope.todos.push(newTodo);
    todosStorage.put($scope.todos);
    $scope.newTodo = '';
  }
  
  $scope.saveEditedTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    //console.log($scope.todos[todoIndex]);
    $scope.todos[todoIndex] = todo;
    todosStorage.put($scope.todos);
  }

  $scope.removeTodo = function(todo) {
    var todoIndex = $scope.todos.indexOf(todo);
    $scope.todos.splice(todoIndex, 1);
    todosStorage.put($scope.todos);
  }
});
