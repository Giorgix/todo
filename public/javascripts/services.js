angular.module('todoAppServices', []).factory('todosStorage',['$http', function($http){
  return {
    get: function() {
      return $http.get('/api/todos');
      //return JSON.parse(localStorage.getItem('todos') || '[]');
    },
    post: function(todo) {
      return $http.post('/api/todos',todo);
      
    },
    put: function(todoId, todo) {
      return $http.put('/api/todos/' + todoId, todo);
    
    },
    delete: function(todoId) {
      return $http.delete('/api/todos/' + todoId);
    }
  }
}]);
