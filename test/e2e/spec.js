describe('todoapp homepage', function() {
  var todos = element.all(by.repeater('todo in todos'));
  
  beforeEach(function() {
    browser.get('http://localhost:3000');
  })

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('TodoApp');
  });

  it('should add new todo', function() {
    element(by.model('newTodo')).sendKeys('todo test e2e');
    element(by.model('priorityChoice')).click();
    element(by.id('addButton')).click();
    expect(todos.count()).toEqual(2);
  })
  it('should delete todo', function() {
    element.all(by.css('.btn--delete')).last().click();
    expect(todos.count()).toEqual(1);
    
  })
});
