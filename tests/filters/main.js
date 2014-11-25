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
});
