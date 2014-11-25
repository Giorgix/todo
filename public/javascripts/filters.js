var todoAppFilters = angular.module('todoAppFilters', []);

todoAppFilters.filter('priority', function() {
  return function(items, priorityOpt) {
    //console.log(items);
    if(priorityOpt == 'all') {
      return items;
    }
    filteredItems = [];
    for(var i = 0; i < items.length; i++) {
      console.log(items[i]);
      if(items[i].priority == priorityOpt){
        filteredItems.push(items[i]); 
      } else {
        continue;
      }
    }
    return filteredItems;
  }
});

todoAppFilters.filter('status', function() {
  return function(items, statusOpt) {
    if(statusOpt == 'all') {
      return items;
    }
    filteredItems = [];
    for (var i = 0;i < items.length; i++) {
      if(statusOpt == 'todo') {
        if(items[i].completed == false) {
          filteredItems.push(items[i]);
        }
      } 
      else {
        if(items[i].completed == true) {
          filteredItems.push(items[i]);
          }
        }
      } 
    return filteredItems; 
    }
  });


