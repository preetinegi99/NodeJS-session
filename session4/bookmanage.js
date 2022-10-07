
const book = require('./bookdemo');

var argv = require('yargs/yargs')(process.argv.slice(2))
    .command(
        'add',
        'To add a book record',
        function (yargs) {
            return yargs.options({
                't': {
                alias: 'title',
                demandOption:true,
                describe: 'The title of the book'
            },
            'a':{
                alias: 'author',
                demandOption: true,
                describe: 'The author of the book'

        }})
        },
        function (argv) {
            book.addBook(argv.title,argv.author);
        }
    )
    .command(
        'list',
        'To list the book',
        function (yargs) {
            return yargs
        },
        function (argv) {
            console.log("List of Books:")
            book.listBook();
        }
    )
    .command(
        'delete',
        'To remove a book record',
        function (yargs) {
            return yargs.option('t', {
                alias: 'title',
                demandOption:true,
                describe: 'The title of the book'
            })
        },
        function (argv) {
            book.RemoveBook(argv.title);
            
        }
    )
    .help()
    .argv