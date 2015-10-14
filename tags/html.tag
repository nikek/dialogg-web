<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title}</title>
  </head>
  <body>
    <app dynamic={dynamic} />
    <script src="/static/app.js"></script>
  </body>

  <script>
    this.title = opts.title || 'default';
    this.dynamic = opts.dynamic || 'oklart';
  </script>
</html>