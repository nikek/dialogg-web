var express = require('express'),
    redux = require('redux'),
    riot = require('riot'),
    tag = require('./public/tags.js');

var router = express();
var port = 3000;
var store = redux.createStore(function(state) { return state; }, { dynamic: 'AWESOMENESSSSSSS' });

var handleReq = function(req, res, next) {
  var derivedState = { dynamic: req.url, title: req.url.split('/')[1] };
  res.send('<!DOCTYPE html>\n' + riot.render('html', Object.assign({}, store.getState(), derivedState)));
};

router.use('/static', express.static(__dirname+'/public'));
router.get('/', handleReq);
router.get('/hej', handleReq);

router.listen(port);
console.log('magic on port ' + port);