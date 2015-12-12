var input = require('../input')(12);

input = JSON.parse(input);

function func() {
    var sum = 0;
    return function(i) {
        sum += i;
        console.log(sum);
    }
}

function traverseArray(arr, callback, ignore) {
    arr.forEach(function(e) {
        if(typeof e === 'number') {
            callback(e);
        } else if (Array.isArray(e)) {
            traverseArray(e, callback, ignore);
        } else if (typeof e === 'object') {
            traverseObject(e, callback, ignore);
        }
    });
}

function traverseObject(obj, callback, ignore) {
    if(ignore === undefined || !ignore(obj)) {
        for(var o in obj) {
            if(typeof obj[o] === 'number') {
                callback(obj[o]);
            } else if(Array.isArray(obj[o])) {
                traverseArray(obj[o], callback, ignore);
            } else if(typeof obj[o] === 'object') {
                traverseObject(obj[o], callback, ignore);
            }
        }
    }
};

function hasRed(obj) {
    for(var o in obj) {
        if(obj[o] === 'red') {
            return true;
        }
    }

    return false;
}

traverseObject(input, func());
traverseObject(input, func(), hasRed);