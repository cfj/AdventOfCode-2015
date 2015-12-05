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

function getNumberOfNiceStringsPart1(stringList) {
    var numNiceStringsPart1 = 0;

    stringList.forEach(function(string) {
        if(isNiceStringPart1(string)) {
            numNiceStringsPart1++;
        }
    });

    return numNiceStringsPart1;
}

function getNumberOfNiceStringsPart2(stringList) {
    var numNiceStringsPart2 = 0;

    stringList.forEach(function(string) {
        if(isNiceStringPart2(string)) {
            numNiceStringsPart2++;
        }
    });

    return numNiceStringsPart2;
}

console.log(getNumberOfNiceStringsPart1(input.split('\n'))); //236
console.log(getNumberOfNiceStringsPart2(input.split('\n'))); //51