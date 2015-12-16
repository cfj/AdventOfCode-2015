var input = require('../input')(16);

var aunts = [];
var regexes = {
    children: /children: (\d+)/i,
    cats: /cats: (\d+)/i,
    samoyeds: /samoyeds: (\d+)/i,
    pomeranians: /pomeranians: (\d+)/i,
    akitas: /akitas: (\d+)/i,
    vizslas: /vizslas: (\d+)/i,
    goldfish: /goldfish: (\d+)/i,
    trees: /trees: (\d+)/i,
    cars: /cars: (\d+)/i,
    perfumes: /perfumes: (\d+)/i
};

var MFCSAMResponse = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1
};

function Aunt(regexes, str, num) {
    this.num = num;
    for(var reg in regexes) {
        var s = regexes[reg].exec(str);
        this[reg] = s ? +s[1] : null;
    }
}

input.split('\n').forEach(function(aunt, i) {
    aunts.push(new Aunt(regexes, aunt, i + 1));
})

function findSue(criteria, aunts) {
    var auntsFound = {};

    aunts.forEach(function(aunt) {
        for(var prop in aunt) {
            if(prop === 'cats' || prop === 'trees') {
                if(aunt[prop] !== null && aunt[prop] > criteria[prop]) {
                    auntsFound[aunt.num] = auntsFound[aunt.num] || {count: 0};
                    auntsFound[aunt.num].count++;
                }
            } else if (prop === 'pomeranians' || prop === 'goldfish') {
                if(aunt[prop] !== null && aunt[prop] < criteria[prop]) {
                    auntsFound[aunt.num] = auntsFound[aunt.num] || {count: 0};
                    auntsFound[aunt.num].count++;
                }
            } else {
                if(aunt[prop] !== null && aunt[prop] === criteria[prop]) {
                    auntsFound[aunt.num] = auntsFound[aunt.num] || {count: 0};
                    auntsFound[aunt.num].count++;
                }
            }
        }
    });

    var max = 0;
    var matchedAunt;
    for(var a in auntsFound) {
        if(auntsFound[a].count > max) {
            max = auntsFound[a].count;
            matchedAunt = a;
        }
    }

    return matchedAunt;
}

var match = findSue(MFCSAMResponse, aunts);

console.log(match);