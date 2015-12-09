var input = require('../input')(9);
var shuffle = require('shuffle-array');

var r = /(\w+) to (\w+) = (\d+)/i;
var routes = {};

input.split('\n').forEach(function(route) {
    var s = r.exec(route);
    var origin = s[1];
    var destination = s[2];
    var distance = +s[3];
    
    routes[origin] = routes[origin] || {};
    routes[destination] = routes[destination] || {};
    routes[origin][destination] = distance;
    routes[destination][origin] = distance;
});

var locations = Object.keys(routes);
var max = 0;
var min = Number.MAX_VALUE;

for(var i = 0; i < 1000000; i++) {
    var routeLength = 0;
    locations = shuffle(locations);

    for(var j = 0; j < locations.length - 1; j++) {
        var from = locations[j];
        var to = locations[j + 1];

        routeLength += routes[from][to];
    }

    max = Math.max(max, routeLength);
    min = Math.min(min, routeLength);
}

console.log('Min route found:', min);
console.log('Max route found:', max);