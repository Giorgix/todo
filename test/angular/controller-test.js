describe('Unit: TodoCtrl', function() {
  
  describe('basic CRUD todos operations', function(){
    var $scope;
    beforeEach(module('todoApp'));


    beforeEach(inject(function($controller, $rootScope) {
      $scope = $rootScope.$new();
      $controller('TodoCtrl', { $scope: $scope });
    }));

    it('should get todos on start', function() {
      expect($scope.todos.length).toBe(2);
    });

    it('should add a new todo to todos', function() {
      $scope.newTodo = 'new todo';
      $scope.addTodo();

      expect($scope.todos.length).toBe(2);
    });

    it('should remove a todo from todos', function() {
      $scope.removeTodo($scope.todos[0]);
      expect($scope.todos.length).toBe(1);
    })
  })
})

