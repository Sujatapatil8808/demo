// literal type 

// const x = 5;

// const greet = "hello javascript";

// let y : 5 | 10;
//  y = 5;
// y = 10;
// y = 100


type Combinable = number | string ;

// resultConversion >> value as a string or as a number

function combine(n1 : Combinable, n2 : Combinable, resultConversion : 'as-number' | 'as-string') : Combinable{
    let result ;
    if(typeof n1 === 'number' && typeof n2 === 'number'){  // datatype number
        return n1 + n2;
    }else{
        return n1.toString() + n2.toString()
    }

    if(resultConversion === 'as-number'){
        result = +result
    }else if(resultConversion === 'as-string'){
        result = result.toString()
    }
    return result;
}

let add1 = combine(12, 23, 'as-number');
console.log(add1, typeof add1)