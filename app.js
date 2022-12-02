// literal type 
// resultConversion >> value as a string or as a number
function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') { // datatype number
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
    if (resultConversion === 'as-number') {
        result = +result;
    }
    else if (resultConversion === 'as-string') {
        result = result.toString();
    }
    return result;
}
var add1 = combine(12, 23, 'as-number');
console.log(add1, typeof add1);
