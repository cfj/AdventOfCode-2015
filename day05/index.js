var input = require('../input')(5);

function isNiceStringPart1(string) {
    return hasThreeVowels(string) && hasDoubleLetters(string) && !hasDisallowedString(string);
}

function isNiceStringPart2(string) {
    return hasPairOfNonOverlappingLetters(string) && hasRepeatingSeparatedCharacters(string);
}

function hasThreeVowels(string) {
    var vowels = string.match(/[aeiou]/g);
    return vowels ? vowels.length > 2 : false;
}

function hasDoubleLetters(string) {
    for(var i = 0; i < string.length; i++) {
        if(string[i] === string[i + 1]) {
            return true;
        }
    }

    return false;
}

function hasDisallowedString(string) {
    return string.match(/ab|cd|pq|xy/) !== null;
}

function hasPairOfNonOverlappingLetters(string) {
    var result = false;
    var pairs = [];

    for (var i = 0; i < string.length - 1; i++) {
        pairs.push(string[i] + string[i + 1]);
    }

    pairs.forEach(function(pair) {
        var exp = new RegExp(pair,"g");
        if (string.match(exp).length > 1) result=true;
    });

    return result;
}

function hasRepeatingSeparatedCharacters(string) {
    for(var i = 2; i < string.length; i++) {
        if(string[i - 2] === string[i]) {
            return true;
        }
    }

    return false;
}

console.log(input.split('\n').filter(function(e) {return isNiceStringPart1(e);}).length); //236
console.log(input.split('\n').filter(function(e) {return isNiceStringPart2(e);}).length); //51