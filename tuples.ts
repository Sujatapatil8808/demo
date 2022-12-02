
// tuple >>>>>>> array of fixed length
              // dont use push method here bcoz error not given to push method
              // datatype sequence also imp they not change , length also not changed


//userRole >>> userRoleNmber >>> can see other candidate | can see other comp jobs | csn see both
// candidate >>>> 1 | false | true | false
// Admin >>>> 2 | true | false | false
// SuperAdmin >>>> 3 | true | true | true
// (see in role for candidate)

// ###########------ Type alias ------###########
type Tperson = {
    fname: string;
    lname: string;
    age: number;
    hobbies: string[];
    skills: string[];
    nickName ?: string;  // optional(only optional can delete)
}
interface Iperson {
    fname: string;
    lname: string;
    age: number;
    hobbies: string[];
    skills: string[];
    nickName ?: string;
    //role : (number | string)  >>> this type not used hence used tuples
    role :[ number, boolean, boolean, boolean]  // tuples >>> array of fixed length
}

// class person {
//     public fname : string;
//     public lname : string;   [class not used here bcoz instance not create ]
//     age: number;
//     hobbies: string[];
//     skills: string[];
//     nickName ?: string
// }

let person: Iperson ={
    fname : "jhon",
    lname : "doe",
    age : 24,
    hobbies : ["cricket", "coding", "chess"],
    skills : ["javascript", "typescript", "angular"],
    role : [1, false, true, false]
}

person.nickName = "jss"
delete person.nickName;
// person.role.push(123)
person.role[0] = 1
person.role[1] = false



let hobbies : string [] = ["cricket", "chess", "coding"];

for (let hobby of hobbies){
    console.log(hobby.toUpperCase())
}

hobbies.push('100')





