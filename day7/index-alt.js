var input = require('../input')(7);

var wires = {};
var output = {};

input.split('\r\n').forEach(function(line) {
    var connections = line.split('->')[0].trim();
    var target = line.split('->')[1].trim();

    wires[target] = connections.split(' ');
});

function getValue(wire) {
    if(!isNaN(wire)) return wire;

    if(output[wire] === undefined) {
        var connections = wires[wire];
        var value;
        var operator;

        if(connections.length === 1) {
            value = getValue(connections[0]);
        } else if (connections.length === 2) {
            operator = connections[0];
            value = ~getValue(connections[1]);
        } else {
            operator = connections[1];
            switch(operator) {
                case 'AND':
                    value = getValue(connections[0]) & getValue(connections[2]);
                    break;
                case 'OR':
                    value = getValue(connections[0]) | getValue(connections[2]);
                    break;
                case 'RSHIFT':
                    value = getValue(connections[0]) >> getValue(connections[2]);
                    break;
                case 'LSHIFT':
                    value = getValue(connections[0]) << getValue(connections[2]);
                    break;
            }
        }

        output[wire] = value;
    }

    return output[wire];
}

console.log(getValue('a'));