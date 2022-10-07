var argv = require('yargs/yargs')(process.argv.slice(2))
    .command(
        'get',
        'make a get HTTP request',
        function (yargs) {
            return yargs.option('u', {
                alias: 'url',
                describe: 'the URL to make an HTTP request to'
            })
        },
        function (argv) {
            console.log(argv.url)
        }
    )
    .command(
        'get1',
        'make a get HTTP request',
        function (yargs) {
            return yargs.option('u', {
                alias: 'url',
                describe: 'the URL to make an HTTP request to'
            })
        },
        function (argv) {
            console.log(argv.url)
        }
    )
    .help()
    .argv
console.log(`URL Received ${argv.url}`)

// node argdemo4.js get -u http://www.yahoo.com
/*
node taskmanager.js add --task "complete Project 1" --descrioption "This project is having Node JS"
node taskmanager.js add --task "complete Project 2" --descrioption "This project is having Java"
*/