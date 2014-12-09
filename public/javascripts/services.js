angular.module('todoAppServices', []).factory('todosStorage', function(){
  return {
    get: function() {
      return JSON.parse(localStorage.getItem('todos') || '[]');
    },
    
    put: function(todos) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }
});
