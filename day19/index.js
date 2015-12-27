var input = require('../input')('testinput');

//var molecule = 'CRnCaCaCaSiRnBPTiMgArSiRnSiRnMgArSiRnCaFArTiTiBSiThFYCaFArCaCaSiThCaPBSiThSiThCaCaPTiRnPBSiThRnFArArCaCaSiThCaSiThSiRnMgArCaPTiBPRnFArSiThCaSiRnFArBCaSiRnCaPRnFArPMgYCaFArCaPTiTiTiBPBSiThCaPTiBPBSiRnFArBPBSiRnCaFArBPRnSiRnFArRnSiRnBFArCaFArCaCaCaSiThSiThCaCaPBPTiTiRnFArCaPTiBSiAlArPBCaCaCaCaCaSiRnMgArCaSiThFArThCaSiThCaSiRnCaFYCaSiRnFYFArFArCaSiRnFYFArCaSiRnBPMgArSiThPRnFArCaSiRnFArTiRnSiRnFYFArCaSiRnBFArCaSiRnTiMgArSiThCaSiThCaFArPRnFArSiRnFArTiTiTiTiBCaCaSiRnCaCaFYFArSiThCaPTiBPTiBCaSiThSiRnMgArCaF';
var molecule = 'HOHOHO';

var replacements = {};

input.split('\r\n').forEach(function(line) {
    var parts = line.split(' => ');

    replacements[parts[0]] = replacements[parts[0]] || {into: []};
    replacements[parts[0]].into.push(parts[1]);
});

function getAllVariations(startingMolecule, possibleReplacements) {
    var distinctMolecules = {};
    
    for(var element in possibleReplacements) {
        possibleReplacements[element].into.forEach(function(d) {
            var n = new RegExp(element, 'g');

            if(molecule.match(n)) {
                for(var i = 1; i <= molecule.match(n).length; i++) {
                    var str = replaceNthOccurrence(molecule, i, element, d);
                    distinctMolecules[str] = distinctMolecules[str] || 1;
                }
            }
        });
    }

    return distinctMolecules;
}

function replaceNthOccurrence(str, n, occurrence, replaceStr) {
    if(str.indexOf(occurrence) === -1) {
        return str;
    }

    var reg = new RegExp(occurrence, 'g');
    var nth = 0;

    var s = str.replace(reg, function (match, i, original) {
        nth++;
        return (nth === n) ? replaceStr : match;
    });

    return s;
}

function getVariations(target, variations, replacements) {
    if(!(target in variations)) {
        variations = getAllVariations()
    }
}

console.log(getAllVariations('e', replacements));

//console.log('Part 1:', Object.keys(getAllVariations(molecule, replacements)).length);