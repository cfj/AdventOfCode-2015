var input = require('../input')(13);
var shuffle = require('shuffle-array');

var r = /(\w+) would (\w+) (\d+).+ (\w+)/i;
var prefs = {};

input.split('\n').forEach(function(preference) {
    var s = r.exec(preference);
    prefs[s[1]] = prefs[s[1]] || {};
    prefs[s[1]][s[4]] = s[2] === 'lose' ? parseInt('-' + s[3]) : parseInt(s[3]);
});

function getCompany(index, seating) {
    if(index === 0) {
        return [seating[1], seating[seating.length - 1]];
    } else if(index === (seating.length - 1)) {
        return [seating[0], seating[seating.length - 2]];
    } else {
        return [seating[index - 1], seating[index + 1]];
    }
}

var people = Object.keys(prefs);
var max = 0;

for(var i = 0; i < 1000000; i++) {
    var happiness = 0;
    people = shuffle(people);

    people.forEach(function(a, i) {
        var tablemates = getCompany(i, people);
        happiness += prefs[a][tablemates[0]];
        happiness += prefs[a][tablemates[1]];
    });

    max = Math.max(max, happiness);
}

console.log(max);