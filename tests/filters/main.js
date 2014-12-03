describe('todoAppFilters', function() {
  beforeEach(module('todoAppFilters'));

  var filter;

  todos = [
    {
      content: 'first todo',
      completed: false,
      priority: 'normal'
      
    },
    {
      content: 'second todo',
      completed: true,
      priority: 'high'
    },
    {
      content: 'third todo',
      completed: false,
      priority: 'low'
    }
  ]

  beforeEach(inject(function($filter) {
    filter = $filter;
  }));

  describe('status filters', function() {
    it('should return all todos', function() {
      var status = filter('status');
      expect(status(todos, 'all').length).toBe(3);
    });
    
    it('should return done todos', function() {
      var status = filter('status');
      expect(status(todos, 'done').length).toBe(1);
    });
    
    it('should return undone todos', function() {
      var status = filter('status');
      expect(status(todos, 'todo').length).toBe(2);
    });

  })
  
  describe('priority filters', function() {
    it('should return all todos', function() {
      var priority = filter('priority');
      expect(priority(todos, 'all').length).toBe(3);
    });
    
    it('should return high priority todos', function() {
      var priority = filter('priority');
      expect(priority(todos, 'high').length).toBe(1);
    });
    
    it('should return normal priority todos', function() {
      var priority = filter('priority');
      expect(priority(todos, 'normal').length).toBe(1);
    });
    it('should return low priority todos', function() {
      var priority = filter('priority');
      expect(priority(todos, 'low').length).toBe(1);
    });

  });
});
