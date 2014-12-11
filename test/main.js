var dbURI = 'mongodb://test:testdb13@ds063140.mongolab.com:63140/test-db'
  , should = require('chai').should()
  , mongoose = require('mongoose')
  , Dummy = mongoose.model('Dummy', new mongoose.Schema({a:Number}))
  , clearDB = require('mocha-mongoose')(dbURI)
  ;

describe("Example spec for a model", function() {
  beforeEach(function(done) {
    if(mongoose.connection.db) return done();

    mongoose.connect(dbURI, done);
  });

  it("can be saved", function(done) {
    new Dummy({a: 1}).save(done);
  });

  it("can be listed", function(done) {
    new Dummy({a: 1}).save(function(err, model) {
      if(err) return done(err);

      new Dummy({a: 2}).save(function(err, model) {
        if(err) return done(err);

        Dummy.find({}, function(err, docs){
          if(err) return done(err);

          docs.length.should.equal(2);
          done();
        });
      });
    });
  });

  it("can clear the DB on demand", function(done) {
    new Dummy({a: 5}).save(function(err, model) {
      if(err) return done(err);

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
});

