var dedupe = require('dedupe');
var input = require('./input');

function Position(x, y) {
    this.x = x;
    this.y = y;
}

function walk(directions) {
    var positionsVisited = [];
    var currentPosition = new Position(0, 0);
    
    positionsVisited.push(new Position(currentPosition.x, currentPosition.y));

    directions.split('').forEach(function(direction) {
        switch(direction) {
            case '>':
                currentPosition.x++;
                break;
            case '<':
                currentPosition.x--;
                break;
            case '^':
                currentPosition.y--;
                break;
            case 'v':
                currentPosition.y++;
                break;
        }

        positionsVisited.push(new Position(currentPosition.x, currentPosition.y));
    });

    return positionsVisited;
}

var uniquePositions = dedupe(walk(input));

var santaInput = input.split('').filter(function(e, i) {
    return i % 2 == 0;
}).join('');

var roboSantaInput = input.split('').filter(function(e, i) {
    return i % 2 !== 0;
}).join('');

var combinedPositions = walk(santaInput).concat(walk(roboSantaInput));
var uniqueCombinedPositions = dedupe(combinedPositions);

console.log(uniquePositions.length);
console.log(uniqueCombinedPositions.length);