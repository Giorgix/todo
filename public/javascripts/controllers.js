var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoCtrl',['$scope', '$http', 'todosStorage', function($scope, $http, todosStorage) {
  $scope.priorityOpts = ['all', 'high', 'normal', 'low'];
  $scope.statusOpts = ['all', 'todo', 'done'];
  todosStorage.get()
              .success(function(data) {
                $scope.todos = data;
                $scope.loading = false;
              })
              .error(function(data) {
                $scope.error = 'Error: ' + data;
                console.log('Error: ' + data);
              });

  $scope.addTodo = function() {
    var newTodo = {
      content: $scope.newTodo.trim(),
      completed : false,
      priority: $scope.priorityChoice
    };
    if(!newTodo.content) {
      return;
    }
    //$scope.todos.push(newTodo);
    todosStorage.post(newTodo)
                .success(function(data) {
                  $scope.loading = false;
                  $scope.newTodo = '';
                  $scope.todos = data;
                })
                .error(function(data) {
                  $scope.error = 'Error: ' + data;
                  console.log('Error: ' + data);
                });

  }
  //TODO make only 1 PUT request 
  $scope.saveEditedTodo = function(todo) {
    //var todoIndex = $scope.todos.indexOf(todo);
    //console.log($scope.todos[todoIndex]);
    //$scope.todos[todoIndex] = todo;
    todosStorage.put(todo)
                .success(function(data) {
                  $scope.loading = false;
                  $scope.todos = data;
                })
                .error(function(data) {
                  $scope.error = 'Error: ' + data;
                  console.log('Error: ' + data);
                });

  }

  $scope.removeTodo = function(todoId) {
    todosStorage.delete(todoId)
                .success(function(data) {
                  $scope.loading = false;
                  $scope.todos = data;
                })
                .error(function(data) {
                  $scope.error = 'Error: ' + data;
                  console.log('Error: ' + data);
                });

  }
}]);
