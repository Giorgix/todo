angular.module('todoAppServices', []).factory('todosStorage',['$http', function($http){
  var service = {};
    service.get = function() {
      return $http.get('/api/todos');
      //return JSON.parse(localStorage.getItem('todos') || '[]');
    }
    service.post = function(todo) {
      return $http.post('/api/todos',todo);
      
    },
    service.put = function(todo) {
      return $http.put('/api/todos/' + todo._id, todo);
    
    },
    service.delete = function(todoId) {
      return $http.delete('/api/todos/' + todoId);
    }
  return service;
}]);
