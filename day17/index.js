var input = require('../input')(17);
var numbers = [];
var found = [];

input.split('\n').forEach(function(number) {
    numbers.push(parseInt(number, 10));
});

function findSums(numbers, targetSum, partial) {
    partial = partial || [];
    var sum = partial ? partial.reduce(function(p, c) {return p + c;}, 0) : 0;

    if(sum > targetSum) return;

    if(sum === targetSum) found.push(partial);

    for(var i = 0; i < numbers.length; i++) {
        var remaining = numbers.slice(i + 1);
        var nextPartial = partial.slice();

        nextPartial.push(numbers[i]);

        findSums(remaining, targetSum, nextPartial);
    }
}

findSums(numbers, 150);

console.log(found.length);