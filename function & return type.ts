// function  return type 

function add(n1:number, n2:number) : number{
    return n1 + n2 
}

function combine (str1, str) : string{
    return `${str1} ${str2}`
}

function add2(n1:number, n2: number) : void {   // void error dyayla help karte
    console.log(n1+n2);
    // return undefined
}

function printObj() : {fname: string, lname : string}{
    return ({
        fname : "jhon",
        lname : "dhoe"
    })
}

function add(n1, n2){
    return n1+n2
}

function sub(n1, n2){
    return n1-n2
}

function mul(n1, n2){
    return n1*n2
}

function calc(num1, num2, cb){
    return cb(num1, num2)
}



