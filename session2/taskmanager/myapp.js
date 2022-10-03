// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv
if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!')
} else {
    console.log('Retreat from the xupptumblers!')
}
//node myapp.js --ships=4 --distance=22
/*
Calculator
add 12 33
mul 12 33
sub 12 33
div 12 33
calc --operation=add --oparand1=12 --oparand2=33
*/