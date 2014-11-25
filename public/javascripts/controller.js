var app = angular.module('todoApp', []);

app.filter('priority', function() {
  return function(items, priorityOpt) {
    //console.log(items);
    if(priorityOpt == 'all') {
      return items;
    }
    filteredItems = [];
    for(var i=0; i < items.length;i++) {
      console.log(items[i]);
      if(items[i].priority == priorityOpt){
        filteredItems.push(items[i]); 
      } else {
        continue;
      }
    }
    return filteredItems;
  }
});

app.controller('TodoCtrl', function($scope) {
  $scope.priorityOpts = ['all', 'high', 'normal', 'low'];
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
