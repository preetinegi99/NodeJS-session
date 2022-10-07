const readLine = require('readline');

var r1 = readLine.createInterface(process.stdin, process.stdout);
// r1.setPrompt("What is your age?");
// r1.prompt();
// r1.on("line",(age) => {
//     console.log(`Age is : ${age}`);
//     r1.close();
// });

//for multiple prompt use nested question
r1.question('What is your name? ', function(name){
    r1.question('What is your country ?',function(country){
        console.log(`${name} is a citizen of  ${country}`);
        r1.close();
    });
});
r1.on('close',() =>{
    console.log('Ptogram ended');

})
