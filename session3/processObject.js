console.log("first line");
console.log("Second Line");

process.on('beforeExit',()=>
{
    console.log("Before Exit");
});

process.on('exit' ,()=>
{
    console.log("Exit");
});

console.log("Third line");
