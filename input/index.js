var fs = require('fs');
var path = require('path');

module.exports = function(num) {
    var file = path.join(__dirname, num.toString());

    return fs.readFileSync(file).toString();
};