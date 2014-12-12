var express = require('express');
var router = express.Router();

//MODELS ===================================
var Todos = require('.././models/todo.js').TodoModel;


function getTodos(res) {
  Todos.find(function(err, todos) {
    if(err) {
      res.send(err);
    } else {
    res.json(todos);
    }
  });
};

// todoAPP API =============================
router.route('/todos') 
.get(function(req, res) {
  getTodos(res);
})

.post(function(req, res) {
  Todos.create({
    content: req.body.content,
    completed: req.body.completed,
    priority: req.body.priority
  }, function(err, todo) {
     if(err) {
       console.warn(err);
       res.send(err);
     } else {
     getTodos(res);
     }
  });
})

router.put('/todos/:id', function(req, res) {
  Todos.findOneAndUpdate({
    _id: req.params.id
  }, {content: req.body.content, 
      completed: req.body.completed,
      priority: req.body.priority}, function(err, todo) {
    if (err) {
      res.send(err);
    }
    getTodos(res);
  });
});

router.delete('/todos/:id', function(req, res) {
  Todos.remove({
    _id: req.params.id
  }, function(err, todo) {
    if(err) {
      res.send(err);
    }

    getTodos(res);
  });
});
module.exports = router;
