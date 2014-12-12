var dbURI = 'mongodb://test:testdb13@ds063140.mongolab.com:63140/test-db'
//var dbURI = 'mongodb://localhost:27017/dummy-test'
  , should = require('chai').should()
  , mongoose = require('mongoose')
  , supertest = require('supertest')
  , api = supertest('http://localhost:3000/api')
  , Dummy = require('.././models/todo.js').TodoModel
  , clearDB = require('mocha-mongoose')(dbURI, {noClear: true})
  ;

describe("Basic dummy model DB operations", function() {
  before(function(done) {
    if(mongoose.connection.db) return done();
    mongoose.connect(dbURI, done)
  });

  before(function(done) {
    clearDB(done);
  });

  it("can be saved", function(done) {
    Dummy.create({content: 'test 1'},done);
  });
  
  it("can be saved again", function(done) {
    Dummy.create({content: 'test 2'},done);
  });

  it("can be listed", function(done) {
    Dummy.find({}, function(err, docs){
      if(err) return done(err);
      docs.length.should.equal(2);
      done();
    });
  });
  
  it("can clear the DB on demand", function(done) {
    Dummy.count(function(err, count){
      if(err) return done(err);
      count.should.equal(2);
    })

      clearDB(function(err){
        if(err) return done(err);

        Dummy.find({}, function(err, docs) {
          if(err) return done(err);
          
          console.log(docs);

          docs.length.should.equal(0);
          done();
        });
      });
    });
});

describe('API requests', function (){

  it('POST: should create a new element', function(done) {
    api.post('/todos')
         .send({content: 'test post', 
                priority: 'normal',
                completed: false})
         .expect(200)
         .expect('Content-Type', /json/)
         .end(function(err, res) {
           if (err) {
             return done(err);
           }
           res.body.length.should.equal(1);
           done();
         });
      });

  it('GET: should return elements as JSON', function(done) {
    api.get('/todos')
       .expect(200)
       .expect('Content-Type', /json/)
       .end(function(err, res) {
         if (err) return done(err);
         res.body.length.should.equal(1);
         done();
     });
  });
});

