var input = require('../input')(18);
var grid = [];

input.split('\r\n').forEach(function(line, i) {
    grid[i] = line.split('');
});

function getLightState(x, y, grid, neighbors) {
    var neighborsOn = neighbors.filter(function(n) {
        return n === '#';
    }).length;

    if(x === 0 && y === 0) return '#';
    if(x === grid.length - 1 && y === 0) return '#';
    if(x === grid.length - 1 && y === grid.length - 1) return '#';
    if(x === 0 && y === grid.length - 1) return '#';

    switch(grid[x][y]) {
        case '.':
            if(neighborsOn === 3) {
                return '#';
            } else {
                return '.';
            }
            break;
        case '#':
            if(neighborsOn === 2 || neighborsOn === 3) {
                return '#';
            } else {
                return '.';
            }
            break;
    }
}

function getNeighbors(x, y, grid) {
    var neighbors = [];

    for(var i = x - 1; i <= x + 1; i++) {
        for(var j = y - 1; j <= y + 1; j++) {
            if(!(grid[i] === undefined || grid[i][j] === undefined || i === x && y === j)) {
                neighbors.push(grid[i][j]);
            }
        }
    }

    return neighbors;
}

function animate(grid) {
    var size = grid.length;
    var newGrid = [];

    for(var i = 0; i < size; i++) {
        newGrid[i] = Array.apply(null, Array(size)).map(Number.prototype.valueOf, 0);
    }

    for(var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++) {
            newGrid[i][j] = getLightState(i, j, grid, getNeighbors(i, j, grid));
        }
    }

    return newGrid;
}

function setGridToStep(step) {
    for(var i = 0; i < step; i++) {
        grid = animate(grid);
    }
}

setGridToStep(100);

var totalOn = grid.map(function(row) {
    return row.filter(function(state) {
        return state === '#';
    }).length;
}).reduce(function(p, c) {return p + c});

console.log(totalOn);