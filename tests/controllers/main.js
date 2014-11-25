describe('Unit: TodoCtrl', function() {
  beforeEach(module('todoApp'));

  var ctrl, $scope;

  beforeEach(inject(function($controller) {
    $scope = {};
    ctrl = $controller('TodoCtrl', {
      $scope: $scope
    });
  }));

  describe('basic CRUD todos operations', function(){
    it('should create todos array with 3 todos', function() {
      expect($scope.todos.length).toBe(3);
    });

    it('should add a new todo to todos', function() {
      $scope.newTodo = 'new todo';
      $scope.addTodo();

      expect($scope.todos.length).toBe(4);
    });

    it('should remove a todo from todos', function() {
      $scope.removeTodo($scope.todos[0]);
      expect($scope.todos.length).toBe(2);
    })
  })
})

