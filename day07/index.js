var input = require('../input')(7);
var instructions = [];

function sortByLength(a, b) {
    a = a.split('=')[0];
    b = b.split('=')[0];

    if(a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    } else if (a.length === b.length) {
        return a.localeCompare(b);
    }
}

function getStringToEval(ops) {
    return ops.join(';').replace(/if|in|do/g, function(m) {
        return m + 'x';
    });
}

input.split('\r\n').forEach(function(line) {
    var parts =  line.replace('LSHIFT', '<<')
                     .replace('RSHIFT', '>>')
                     .replace('OR', '|')
                     .replace('AND', '&')
                     .replace('NOT', '~').split('->');

    instructions.push(parts[1].trim() + '=' + parts[0].trim() + ';');
});

instructions.sort(sortByLength);
instructions.push(instructions.shift());

//Part 1
var a = eval(getStringToEval(instructions));
console.log(a);

//Part 2
instructions[0] = 'b=' + a;
var b = eval(getStringToEval(instructions));
console.log(b);