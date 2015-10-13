riot.tag('app', '\n  <h1>Hejsan Home tag {dynamic}</h1>\n\n', function(opts) {
    this.dynamic = opts.dynamic || 'oklart';
  
});
riot.tag('html', '\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="">\n    <meta name="author" content="Niklas Ek">\n\n    <title>{title}</title>\n  </head>\n  <body>\n    <app dynamic="{dynamic}"></app>\n    <script src="app.js"></script>\n  </body>\n\n', function(opts) {
    this.title = opts.title || 'default';
    this.dynamic = opts.dynamic || 'oklart';
  
});