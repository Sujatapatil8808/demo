
const num1 = document.getElementById("num1")! as HTMLInputElement ;
const num2 = document.getElementById("num2")! as HTMLInputElement ;
const btn = document.getElementById("btn")!; //(! indicate)>>this value is not null
const result = document.getElementById("result")!; //(! indicate)>>this value is not null


function add(n1:number, n2:number){
    return n1+n2                // dont use arrow function code complicated
}


btn.addEventListener("click", function(){
    console.log(add(+num1.value, +num2.value)) //(here + sign converted string to number)
    result.innerHTML = "" + add(+num1.value, +num2.value)
})
  
let x:number = 10;
 
let y ; // not given any datatype means any
//y=123;
y=true;
//y= "hello";

//x= "Hekko typescript"

let z = null;
console.log(typeof z);


interface Iperson {
    fname : string;
    lname : string;
    email : string;
    contact : Number
}

let p1 : Iperson = {
    fname : "jhon",
    lname : "dhoe",
    email :"suj",
    contact : 123
}

interface Iperson2 {
    fname : string;
    lname : string;
    age : number;
    email : string;
    contact : number;
    skills : string[]
    hobbies : string[]
}

let p2 : Iperson2 = {
    fname : "jhon",
    lname : "dhoe",
    age : 26,
    email : "suj",
    contact : 12345,
    skills : ["HTML", "CSS#", "javascript", "Typescript"],
    hobbies : ["cooking", "playing", "singing", "dancing"]
}


// ##########--------- Type Inference ---------############

// if we declare a property and assign a value in it TS will assign a  datatype to that declaration

let x1 = 10; // 
 let y1 : number = 100;

function add1(n1:number, n2:number, showResult:boolean, phrase : string) {
    if(showResult === true){
        let result = phrase + n1+n2;
        console.log(result)  //200300
    } else {
        return n1+n2
    }
}

//(add1(100, 100, true))
let r = add1(200,300, true, "the addition is");  // if false then write this type
console.log(r)   //500
let r = add1(200,300, false, "the addition is");  // if false then write this type
console.log(r)   //undefine


