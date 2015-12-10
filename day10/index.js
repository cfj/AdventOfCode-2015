var input = require('../input')(10);

function lookAndSay(num) {
    var result = '';
    var nums = num.split('');
    var charCount = 1;

    if(nums.length === 1) {
        return result = '1' + nums[0];
    }

    for(var i = 0; i <= nums.length - 1; i++) {
        if(nums[i] === nums[i + 1]) {
            charCount++;
        } else {
            result += charCount + nums[i];
            charCount = 1;
        }
    }

    return result;
}

function getIteration(iterations, num) {
    for(var i = 0; i < iterations; i++) {
        num = lookAndSay(num);
    }

    return num;
}

var part1 = getIteration(40, input);
var part2 = getIteration(50, input);

console.log('Part 1 result:', part1.length);
console.log('Part 2 result:', part2.length);