describe('todoAppFilters', function() {
  beforeEach(module('todoAppFilters', 'todoAppControllers'));

  var filter, $scope, ctrl;

  beforeEach(inject(function($controller, $filter) {
    $scope = {}; 
    filter = $filter;
    ctrl = $controller('TodoCtrl', {
      $scope: $scope 
    }) 
  }));

  describe('status filters', function() {
    it('should return all todos', function() {
      var status = filter('status');
      expect(status($scope.todos, 'all').length).toBe(3);
    });
    
    it('should return done todos', function() {
      var status = filter('status');
      expect(status($scope.todos, 'done').length).toBe(1);
    });
    
    it('should return undone todos', function() {
      var status = filter('status');
      expect(status($scope.todos, 'todo').length).toBe(2);
    });

  })
  
  describe('priority filters', function() {
    it('should return all todos', function() {
      var priority = filter('priority');
      expect(priority($scope.todos, 'all').length).toBe(3);
    });
    
    it('should return high priority todos', function() {
      var priority = filter('priority');
      expect(priority($scope.todos, 'high').length).toBe(1);
    });
    
    it('should return normal priority todos', function() {
      var priority = filter('priority');
      expect(priority($scope.todos, 'normal').length).toBe(1);
    });
    it('should return low priority todos', function() {
      var priority = filter('priority');
      expect(priority($scope.todos, 'low').length).toBe(1);
    });

  });
});
