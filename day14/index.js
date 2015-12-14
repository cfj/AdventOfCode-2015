var input = require('../input')(14);

var r = /^(\w+)\s\w+\s\w+\s(\d+)\s\w+\/\w\s\w+\s(\d+)\s\w+,\s\w+\s\w+\s\w+\s\w+\s\w+\s(\d+)/i;
var reindeer = {};
var timeLimit = 2503;

input.split('\n').forEach(function(deer) {
    var s = r.exec(deer);

    reindeer[s[1]] = reindeer[s[1]] || {};
    reindeer[s[1]].resting = false;
    reindeer[s[1]].distanceTravelled = 0;
    reindeer[s[1]].speed = +s[2];
    reindeer[s[1]].flyingTime = +s[3];
    reindeer[s[1]].requiredRest = +s[4];
    reindeer[s[1]].leftToRest = 0;
    reindeer[s[1]].timeFlown = 0;
    reindeer[s[1]].points = 0;
});

function calcStateAtSeconds(reindeer, seconds) {
    for(var i = 0; i <= seconds; i++) {
        for(var deer in reindeer) {
            if(reindeer[deer].leftToRest === 0) {
                reindeer[deer].resting = false;
                reindeer[deer].leftToRest = reindeer[deer].requiredRest;
            }

            if(reindeer[deer].timeFlown === reindeer[deer].flyingTime) {
                reindeer[deer].resting = true;
                reindeer[deer].timeFlown = 0;
            }

            if(reindeer[deer].resting) {
                reindeer[deer].leftToRest--;
            } else {
                reindeer[deer].distanceTravelled += reindeer[deer].speed;
                reindeer[deer].timeFlown++;
            }
        }

        awardPointToLeader(reindeer);
    }
}

function awardPointToLeader(reindeer) {
    var leadingDistance = getMaxOfProperty(reindeer, 'distanceTravelled');

    for(var deer in reindeer) {
        if(reindeer[deer].distanceTravelled === leadingDistance) {
            reindeer[deer].points++;
        }
    }
}

function getMaxOfProperty(reindeer, prop) {
    var max = 0;

    for(var r in reindeer) {
        max = Math.max(max, reindeer[r][prop]);
    }

    return max;
}

calcStateAtSeconds(reindeer, timeLimit);

console.log('Part 1:', getMaxOfProperty(reindeer, 'distanceTravelled'));
console.log('Part 2:', getMaxOfProperty(reindeer, 'points'));