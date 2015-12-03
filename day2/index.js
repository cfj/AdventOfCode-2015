var input = require('./input');

function toInt(arrayOfStrings) {
    return arrayOfStrings.map(function(e) {
        return parseInt(e, 10);
    });
}

function getRequiredWrappingPaper(l, w, h) {
    return 2*l*w + 2*w*h + 2*h*l + Math.min(l*w, w*h, h*l);
}

function getRequiredRibbon(dimensions) {
    dimensions.sort(function(a, b) {return a - b;});
    return 2*dimensions[0] + 2*dimensions[1] + dimensions[0]*dimensions[1]*dimensions[2];
}

function getTotalWrappingPaper(presents) {
    var total = 0;

    presents.split('\n').forEach(function(e) {
        var dimensions = e.split('x');

        total += getRequiredWrappingPaper(dimensions[0], dimensions[1], dimensions[2]);
    });

    return total;
}

function getTotalRibbon(presents) {
    var total = 0;

    presents.split('\n').forEach(function(e) {
        var dimensions = e.split('x');

        total += getRequiredRibbon(toInt(dimensions));
    });

    return total;
}


//console.log(getTotalWrappingPaper(input)); //1598415
console.log(getTotalRibbon(input)); //3812909