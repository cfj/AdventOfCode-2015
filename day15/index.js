var input = require('../input')(15);

var r = /(\w+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)/i;
var ingredients = {};
var proportions = [];

input.split('\n').forEach(function(ingredient) {
    var s = r.exec(ingredient);

    ingredients[s[1]] = {
        capacity: +s[2],
        durability: +s[3],
        flavor: +s[4],
        texture: +s[5],
        calories: +s[6],
        amount: 0
    };
});

for(var i = 1; i < 100; i++) {
    for(var j = 1; j < 100 - i; j++) {
        for(var k = 1; k < 100 - i - j; k++) {
            var p = [i, j, k, 100 - (i + j + k)];
            proportions.push(p);
        }
    }
}

function getCookieTotal(ingredients) {
    var c = 0;
    var d = 0
    var f = 0;
    var t = 0;
    var cal = 0;

    for(var i in ingredients) {
        c += ingredients[i].capacity * ingredients[i].amount;
        d += ingredients[i].durability * ingredients[i].amount;
        f += ingredients[i].flavor * ingredients[i].amount;
        t += ingredients[i].texture * ingredients[i].amount;
        cal += ingredients[i].calories * ingredients[i].amount;
    }

    if(c < 0) c = 0;
    if(d < 0) d = 0;
    if(f < 0) f = 0;
    if(t < 0) t = 0;

    if(cal === 500) {
        return c*d*f*t;
    }

    return 0;
}

function setAmounts(ingredients, amounts) {
    var index = 0;

    for(var i in ingredients) {
        ingredients[i].amount = amounts[index];
        index++;
    }
}

var max = 0;
var amount;

proportions.forEach(function(amounts) {
    setAmounts(ingredients, amounts);
    max = Math.max(max, getCookieTotal(ingredients));
});

console.log(max);