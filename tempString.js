//******** Template string in TypeScript ********** 
//******It is used for String Concatination of two or more Elements *******//
//********Its used backtick `` for concatination *********/
var employee = {
    name: "Jyoti",
    age: "33"
};
var templateString = "Name:".concat(employee.name, "\nAge:").concat(employee.age, "\n");
console.log(templateString);
