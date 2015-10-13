<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Niklas Ek">

  <title>{title}</title>
</head>
<body>
  <app dynamic={dynamic} />
  {title}
  <script src="app.js"></script>
</body>

  this.title = opts.title || 'default'
  this.dynamic = opts.dynamic || 'oklart'
</html>