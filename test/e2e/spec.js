describe('todoapp homepage', function() {
  var todos = element.all(by.repeater('todo in todos'));
  
  it('should have a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('TodoApp');
  });

  it('should add new todo', function() {
    browser.get('http://localhost:3000');
    element(by.model('newTodo')).sendKeys('todo test e2e');
    element(by.id('addButton')).click();
    expect(todos.count()).toEqual(3);
  })
});
