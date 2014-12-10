var express = require('express');
var router = express.Router();

//MODELS ===================================
var Todo = require('.././models/todo.js').TodoModel;

// todoAPP API =============================
router.route('/todos') 
.get(function(req, res) {
  Todo.find().exec(function(err, data) {
    if(err) {
      console.log('error: ' + err);
      res.send(err);
    }
    console.log('Success!: ' + data);
    res.json(data);
  });
})

.post(function(req, res) {
  Todo.create({
    content: req.body.content,
    completed: req.body.completed,
    priority: req.body.priority
  }, function(err, todo) {
     if(err) {
       res.send(err);
     }
     Todo.find(function(err, todos) {
       if(err) {
         res.send(err);
       }
       res.json(todos);
     });
  });
})


module.exports = router;
