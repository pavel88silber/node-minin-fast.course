/*
const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'vKPf03vLuVivvCPMCONpYMiiEBR4Smhu1dk6PIUe0tqWMw9WSghZ7ONOtHjdG483',
  APISECRET: 'mzxi4fCKZPQoekch3pm4KicTJ8Tc6zOiwqXx3VoPd6Fk95RFveCcV8M3KVmiuKzW'
});
*/

const chalk = require('chalk')
console.log(chalk.yellow('Hello Yellow'))

//const data = require('/GitHub/11-4-21 node express test/data')
const y = require('./data')
console.log(y)
// buildin functions (function(exports, require, module, __dirname))
console.log('buildin functions  ->  ' + __dirname)
console.log('buildin functions  ->  ' + exports)
console.log('buildin functions  REQUIRE->  ' + require)
console.log('buildin functions  MODULE ->  ' + module)
console.log('buildin functions  FILE NAME ->  ' + __filename)


console.log('test');


