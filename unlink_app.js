var fs = require('fs');
fs.unlink('calc.js', function(err) {
  console.log('deleted...');
});
