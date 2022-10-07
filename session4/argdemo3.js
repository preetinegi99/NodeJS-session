var argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('$0 <cmd> [args]')
  .command('create', 'Add a record') 
  .command('read', 'Read a record') 
  .command('update', 'Update a record') 
  .command('delete', 'Delete a record') 

