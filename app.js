// MODULES =============================================
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// CONFIGURATION =======================================

// CONFIG FILES
var db = require('./config/db');
//mongoose.connect(db.url);
mongoose.connect(db.urlTest);


// ROUTES ==============================================
var frontRoutes = require('./routes/index');
var apiRoutes = require('./routes/api');


// view engine setup
app.set('views',(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

app.use('/', frontRoutes);
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
