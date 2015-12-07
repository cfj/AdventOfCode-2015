var input = require('../input')(7);

var evil = '';

input.split('\r\n').forEach(function(line) {
    var parts =  line.replace('LSHIFT', '<<')
                     .replace('RSHIFT', '>>')
                     .replace('OR', '|')
                     .replace('AND', '&')
                     .replace('NOT', '~').split('->');

    console.log(parts);
    evil += parts[0] + '=' + parts[1] + ';';
});