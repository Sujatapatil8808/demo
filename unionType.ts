/// union

type Combinable = number | string
let x :  number | string;


function combine(n1 : Combinable , n2: Combinable ) : Combinable {
    if (typeof n1 === 'number' && typeof n2 === 'number' ){
        return n1 + n2
    }else {
        return n1.toString() + n2.toString()
    }
}

let add1 = combine(10, 20);
console.log(add1)

let add2 = combine(20, 30);
console.log(add2)     // >>>> 50

let add3 = combine(20, '23');
console.log(add3)    ///>>>>>> 2023

