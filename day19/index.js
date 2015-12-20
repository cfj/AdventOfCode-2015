var input = require('../input')(19);

var molecule = 'CRnCaCaCaSiRnBPTiMgArSiRnSiRnMgArSiRnCaFArTiTiBSiThFYCaFArCaCaSiThCaPBSiThSiThCaCaPTiRnPBSiThRnFArArCaCaSiThCaSiThSiRnMgArCaPTiBPRnFArSiThCaSiRnFArBCaSiRnCaPRnFArPMgYCaFArCaPTiTiTiBPBSiThCaPTiBPBSiRnFArBPBSiRnCaFArBPRnSiRnFArRnSiRnBFArCaFArCaCaCaSiThSiThCaCaPBPTiTiRnFArCaPTiBSiAlArPBCaCaCaCaCaSiRnMgArCaSiThFArThCaSiThCaSiRnCaFYCaSiRnFYFArFArCaSiRnFYFArCaSiRnBPMgArSiThPRnFArCaSiRnFArTiRnSiRnFYFArCaSiRnBFArCaSiRnTiMgArSiThCaSiThCaFArPRnFArSiRnFArTiTiTiTiBCaCaSiRnCaCaFYFArSiThCaPTiBPTiBCaSiThSiRnMgArCaF';
var replacements = {};
var variants = {};

input.split('\r\n').forEach(function(line) {
    var parts = line.split(' => ');

    replacements[parts[0]] = replacements[parts[0]] || {into: []};
    replacements[parts[0]].into.push(parts[1]);
});

//console.log(replacements);

for(var m in replacements) {

    replacements[m].into.forEach(function(d) {
        //console.log(m + ' can be replaced with: ' + d);
        var reg = new RegExp(m, 'g');
        var replaceReg = new RegExp(m);
        var matches;
    });
}

function getVariations(str, replacement) {

}

//console.log(Object.keys(variants).length);


var test = 'agbbbbbbbagbbbbbbbag';

var reg = new RegExp('ag', 'g');
var rep = new RegExp('a');
var match;

while((match = reg.exec(test)) !== null) {
    var msg = 'Found ' + match[0] + '. ';
    msg += 'Next match starts at ' + match.index + ' ' + reg.lastIndex;
    console.log(msg);
}