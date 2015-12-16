var input = require('../input')(15);
var permute = require('permute');

var r = /(\w+): (\w+) (-?\d+), (\w+) (-?\d+), (\w+) (-?\d+), (\w+) (-?\d+), (\w+) (-?\d+)/i;

var ingredients = {};

input.split('\n').forEach(function(ingredient) {
    var s = r.exec(ingredient);

    //console.log(s);

    ingredients[s[1]] = {};
    ingredients[s[1]][s[2]] = +s[3];
    ingredients[s[1]][s[4]] = +s[5];
    ingredients[s[1]][s[6]] = +s[7];
    ingredients[s[1]][s[8]] = +s[9];
    ingredients[s[1]][s[10]] = +s[11];
    ingredients[s[1]].amount = 0;
});

//ingredients['Butterscotch'].amount = 44;
//ingredients['Cinnamon'].amount = 56;

//console.log(ingredients);

function getCookieTotal(ingredients) {
    var c = 0;
    var d = 0
    var f = 0;
    var t = 0;

    for(var i in ingredients) {
        c += ingredients[i].capacity * ingredients[i].amount;
        d += ingredients[i].durability * ingredients[i].amount;
        f += ingredients[i].flavor * ingredients[i].amount;
        t += ingredients[i].texture * ingredients[i].amount;
    }

    //console.log(c, d, f, t);

    return c*d*f*t;
}

var total = getCookieTotal(ingredients);

//console.log(total);

var amounts = [2,3,5,7];
while (permute(amounts)){
    var index = 0;

    for(var i in ingredients) {
        ingredients[i].amount = amounts[index];
        index++;
    }

    index = 0;

    console.log(amounts);
    console.log(ingredients);
}