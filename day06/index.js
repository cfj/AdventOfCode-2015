var input = require('../input')(6);
var grid = [];

for(var i = 0; i < 1000; i++) {
    grid[i] = Array.apply(null, Array(1000)).map(Number.prototype.valueOf, 0);
}

function setBrightness(startX, startY, endX, endY, increment) {
    for(var i = startX; i <= endX; i++) {
        for(var j = startY; j <= endY; j++) {
            grid[i][j] += increment;
            if(grid[i][j] < 0) grid[i][j] = 0;
        }
    }
}

function controlLights(startX, startY, endX, endY, instruction) {
    switch(instruction) {
        case 'turn on':
            setBrightness(startX, startY, endX, endY, 1);
            break;
        case 'turn off':
            setBrightness(startX, startY, endX, endY, -1);
            break;
        case 'toggle':
            setBrightness(startX, startY, endX, endY, 2);
            break;
    }
}

input.split('\n').forEach(function(e) {
    var instruction = e.split(/(\d+)/);
    controlLights(+instruction[1], +instruction[3], +instruction[5], +instruction[7], instruction[0].trim());
});

function sumRow(p, c) {return p + c;}
var totalBrightness = grid.map(function(row) {return row.reduce(sumRow);}).reduce(sumRow);

console.log(totalBrightness);