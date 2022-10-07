process.stdout.write("Welcome to NodeJS");
process.stdout.write("Welcome to NodeJS \n");
process.stdout.write("---------------------\n");
process.stdout.write("Enter Your name: ");

process.stdin.on('data',data=>{
    process.stdout.write(`Your name is ${data.toString()}`);
    process.exit();
})

process.on('exit', ()=>
{
    process.stdout.write("Program ended");
})