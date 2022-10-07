const fs = require("fs");

console.log("Program starts");
/*Asynchronous way 
fs.readFile('input.txt','utf-8',(err, data) => {
    if (err){
        console.log(err);
    }  
    console.log(data);

});*/

//synchronous way
const data = fs.readFileSync('input.txt','utf-8');
console.log(data);

console.log("Program ends");