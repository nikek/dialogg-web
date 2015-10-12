// IMPORT
var fs = require('fs'),
    http = require('http'),
    statics = require('node-static'),
    router = require('grapnel-server'),
    redux = require('redux'),
    riot = require('riot'),
    tag = require('./public/home.js');


// CONSTRUCT
var route = router.start();
var staticFiles = new statics.Server('./public');


// CONSTANTS
var indexHtml = fs.readFileSync('./index.html', 'utf-8');   // LAYOUT
var mainTag = 'app';
var defaultState = redux.createStore(function(state) {
  return state;
}, { dynamic: 'AWESOMENESSSSSSS' });


// Inject riot rendered view into index.html
var injectRiotView = function(state) {
  console.log(state);

  // Render riot root tag with app state
  var view = riot.render(mainTag, state);
  var regex = new RegExp('<' + mainTag + '(/>|>.*<\/' + mainTag + '>)'); // match <app/> or <app></app>

  return indexHtml.replace(regex, view);
};


// RIOT RESPONSE
var riotify = function(req, res, next) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.end(injectRiotView(Object.assign({}, defaultState.getState(), {dynamic: req.url})));
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