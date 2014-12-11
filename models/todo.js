var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// TODO separete priorities and be able to create or remove them
/*var Priority = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

var PriorityModel = mongoose.model('Priority', Priority);
*/

var Todo = new Schema({
  content: {
    type: String,
    unique: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    required: true,
    default: 'normal'
  }
});

var TodoModel = mongoose.model('Todo', Todo);

module.exports.TodoModel = TodoModel;
