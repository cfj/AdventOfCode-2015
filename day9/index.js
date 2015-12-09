var input = require('../input')(9);
var permute = require('permute');

var r = /(\w+) to (\w+) = (\d+)/i;

var cities = {};
var destinations = [];

input.split('\n').forEach(function(route) {
    var s = r.exec(route);
    var origin = s[1];
    var destination = s[2];
    var distance = +s[3];
    
    if(!cities[origin]) {
        cities[origin] = {};
    }

    if(!cities[destination]) {
        cities[destination] = {};
    }

    cities[origin][destination] = distance;
    cities[destination][origin] = distance;
    cities[origin][origin] = 0;
    cities[destination][destination] = 0;
});

console.log(cities);

//447 too high

/*
Dublin -> London -> Belfast = 982 //compare routes on this form...
London -> Dublin -> Belfast = 605
London -> Belfast -> Dublin = 659
Dublin -> Belfast -> London = 659
Belfast -> Dublin -> London = 605
Belfast -> London -> Dublin = 982
*/