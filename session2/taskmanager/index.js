//using thirdparty module
import validator from 'validator';
import chalk from 'chalk';

//using module
console.log(validator.isEmail('preeti.negi@jktech.com'));
console.log(chalk.black.bgYellow('Welcome to nodejs'));

import { EventEmitter } from 'events';
const myeventemitter = new EventEmitter()
// callback function
const fun = () => { console.log("I am from Cry event") }
const fun2 = () => { console.log("I am from fun2 event") }
// bind event with callback function
myeventemitter.on('cry', fun)
myeventemitter.on('myevent', fun2)
// Trigger event
myeventemitter.emit('cry')
myeventemitter.emit('myevent')
myeventemitter.emit('cry')