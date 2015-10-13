// IMPORT
var fs = require('fs'),
    http = require('http'),
    statics = require('node-static'),
    router = require('grapnel-server'),
    redux = require('redux'),
    riot = require('riot'),
    tag = require('./public/tags.js');


// CONSTRUCT
var route = router.start();
var staticFiles = new statics.Server('./public');


// HTML SETUP
var indexHtml = fs.readFileSync('./index.html', 'utf-8');   // LAYOUT
var mainTag = 'html';
var regex = new RegExp('<' + mainTag + '(/>|>.*<\/' + mainTag + '>)'); // match <app/> or <app></app>


// STORE
var defaultState = redux.createStore(function(state) {
  return state;
}, { dynamic: 'AWESOMENESSSSSSS' });


// Inject riot rendered view into index.html
var renderHTML = function(state) {
  console.log(state);
  return indexHtml.replace(regex, riot.render(mainTag, state));
};


// RIOT RESPONSE
var riotify = function(req, res, next) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.end(renderHTML(Object.assign({}, defaultState.getState(), {dynamic: req.url, title: req.url.split('/')[1]})));
};


// ROUTES
router.get('/', riotify);
router.get('/hej', riotify);


// START SERVER
http.createServer(function(request, response) {
  // handle static files
  request.addListener('end', function () {
    staticFiles.serve(request, response);
  }).resume();

  // route to router
  route(request, response);
}).listen(3000);
