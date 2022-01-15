//******** Template string in TypeScript ********** 
//******It is used for String Concatination of two or more Elements *******//
//********Its used backtick `` for concatination *********/

let employee={
    name:"Jyoti",
    age:"33"
}
let templateString=`Name:${employee.name}
Age:${employee.age}
`;
console.log(templateString);