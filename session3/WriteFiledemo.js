const fs = require("fs");

let data = "Hi !! hope you are doing well";

//Asynchronous way 
fs.writeFile("output2.txt",data, (err)=>
{
    if (err){
        console.log(err);
    }
})