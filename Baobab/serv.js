var deployd = require('deployd'),
        options = {port: 2407};
var dpd = deployd(options);
dpd.listen();

console.log('Server running at http://127.0.0.1:2404/');
