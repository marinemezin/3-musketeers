/*eslint-disable no-process-exit*/
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const Conf = require('conf');
const pkg = require('../package.json');

const config = new Conf();

updateNotifier({pkg}).notify();

//Save the new default values entered for the specified currency
const saveCurrencies = argv => {
  config.set('defaultFrom', argv[1] || config.get('defaultFrom', 'USD'));
  config.set(
    'defaultTo',
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
  );
  console.log(chalk.green('Saved default currencies to ' + config.path));
  process.exit(1);
};

//Display the version of the application
const version = () => {
  console.log(pkg.version);
  process.exit(1);
};

//Display information that can help the user
const help = () => {
  console.log(`
Usage:

 $ ${chalk.cyan('cash')} ${chalk.green('<amount>')} ${chalk.yellow(
  '<currency>'
)}

 $ ${chalk.cyan('cash')} ${chalk.magenta('<command>')}

Commands:
${chalk.magenta('--save,  -s')}       Save currencies as default currencies
${chalk.magenta('--help,  -h')}       Display help message
${chalk.magenta('--version,  -v')}     Display version number

 List of currencies: http://akep.us/currencies

Examples:

 $ ${chalk.cyan('cash')} ${chalk.green('1')} ${chalk.yellow('usd')}

 $ ${chalk.cyan('cash')} ${chalk.green('1')} ${chalk.yellow('usd eur pln aud')}

 $ ${chalk.cyan('cash')} ${chalk.magenta('--save')} ${chalk.green(
  'usd'
)} ${chalk.yellow('eur pln aud')}

 $ ${chalk.cyan('cash')} ${chalk.magenta('--help')}
  `);
  process.exit(1);
};

//If the user ask to get the version, need help or want to save default currencies he will go into this function to process what he wants
const helpers = argv => {
    // Version
    //Return the application's version
    if (argv.indexOf('--version') !== - 1 || argv.indexOf('-v') !== - 1) {
        version();
    }

    // Help
    //Display information of what to do or what you can do
    if (argv.indexOf('--help') !== - 1
        || argv.indexOf('-h') !== - 1
        || ! argv.length) {
        help();
    }

    // Save
    // Save into config.json the default currencies entered
    if (argv.indexOf('--save') !== - 1
        || argv.indexOf('-s') !== - 1
        || ! argv.length) {
        saveCurrencies(argv);
    }
};

module.exports = helpers;
