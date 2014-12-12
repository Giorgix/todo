describe('Unit: TodoCtrl', function() {
  beforeEach(module('todoApp'));

  var ctrl, scope, storage, def;

  beforeEach(inject(function($controller, $rootScope, $q) {
    storage = {
      get: function() {
        def = $q.defer();
        return def.promise;
      }
    };
    spyOn(storage, 'get').andCallThrough();
    scope = $rootScope.$new();
    controller = $controller('ctrl', {
      $scope: scope,
      storage: storage
    });
  }));
  describe('basic CRUD todos operations', function(){
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('TodoCtrl', { $scope: $scope });
    });
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

