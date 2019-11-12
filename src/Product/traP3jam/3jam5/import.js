function importJS() {
  if (! new Array().push) return false;
  var s = new Array(
    './main.js',
    'render.js',
    'object.js',
    'update.js',
    'input.js',
    'ease.js',
    'Effect.js'
  );
  for (var i=0; i<scripts.length; i++) {
    document.write('<script type="text/javascript" src="' +scripts[i] +'" charset="utf-8"><¥/script>');
  }
}
importJS();
