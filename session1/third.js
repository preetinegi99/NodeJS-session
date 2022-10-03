const fun1 = ()=>{(console.log("Fun1"));}
const fun2 = ()=>{(console.log("Fun2"));}

const fun = ()=>{
    fun1();
    setTimeout(fun2,1000);
    console.log("Fun");

}

fun();