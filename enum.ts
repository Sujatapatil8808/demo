
// . HR-ADMIN, SUPER_ADMIN

enum Role {CANDIDATE = "c", HR_ADMIN = 'HD', SUPER_ADMIN = 'SA'} // by default value 1,2,3

let person = {
    fname : 'jhon',
    lname : 'doe',
    email : 'suj@123',
    role : Role.HR_ADMIN
}








if(person.role === Role.HR_ADMIN){
    console.log(`Redirect to HR admin dashboard`)
}

console.log(Role.CANDIDATE)  //0
console.log(Role.HR_ADMIN)      //1 
console.log(Role.SUPER_ADMIN)   //2