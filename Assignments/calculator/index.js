//importing modules
import chalk from 'Chalk';
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const add = (a,b) => a + b
const sub = (a,b) => a - b
const multiply = (a,b)=> a * b
const divide = (a,b)=> a / b
const modulus   = (a,b) => a % b

const argv = yargs(hideBin(process.argv)).argv

if (isNaN(argv.operand1) || isNaN(argv.operand2)){
        console.log(chalk.redBright ('Please enter numeric values!!')); 
}
else {

    if (argv.operation == 'add') {

        const sum = add(argv.operand1,argv.operand2);
        console.log(chalk.greenBright ('The sum of ' + argv.operand1 + " and " + argv.operand2 + " is " + sum ));
    } 
    else if (argv.operation == 'subtract') {
        const diff = sub(argv.operand1,argv.operand2);
        console.log(chalk.greenBright ('The difference of ' + argv.operand1 + " and " + argv.operand2 + " is " + diff));
    } 
    else if (argv.operation == 'multiply') {
        const mul = multiply(argv.operand1,argv.operand2);
        console.log(chalk.greenBright ('The multiplication of ' + argv.operand1 + " and " + argv.operand2 + " is " + mul));
    } 
    else if (argv.operation == 'divide') {
    
        const div = divide(argv.operand1,argv.operand2);
        console.log(chalk.greenBright ('The division of ' + argv.operand1 + " and " + argv.operand2 + " is " + div));
    }
    
    else if (argv.operation == 'modulus') {
        if (argv.operand2 == 0){
            console.log(chalk.redBright ('Mod by zero !!')); 
        }
        else {
            const mod = modulus(argv.operand1,argv.operand2);
            console.log(chalk.greenBright ('The modulus of ' + argv.operand1 + " and " + argv.operand2 + " is " + mod));
        }
        }
    else {
        console.log(chalk.redBright ('Invalid operation!!'));
    }
}

