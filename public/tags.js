riot.tag('app', '<h1>Hejsan Home tag {dynamic}</h1>', function(opts) {

  this.dynamic = opts.dynamic || 'oklart'

});
riot.tag('html', '<head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="description" content=""> <meta name="author" content="Niklas Ek"> <title>{title}</title> </head> <body> <app dynamic="{dynamic}"></app> {title} <script src="app.js"></script> </body>', function(opts) {

  this.title = opts.title || 'default'
  this.dynamic = opts.dynamic || 'oklart'

});