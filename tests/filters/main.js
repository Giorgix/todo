describe('todoAppFilters', function() {
  beforeEach(module('todoApp'));

  var filter, scope, ctrl;

  beforeEach(inject(function($controller, $filter, $rootScope) {
    scope = $rootScope.$new(); 
    filter = $filter;
    ctrl = $controller('TodoCtrl', {
      $scope: scope 
    }) 
  }));

  describe('status filter', function() {
    it('should return all todos', function() {
      expect(filter('status')(scope.todos, 'all').length).toBe(3);
    });
  })
});
