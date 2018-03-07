/*eslint-disable no-process-exit*/
const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const currencies = require('../lib/currencies.json');

const API = 'https://api.fixer.io/latest';

//Convert the starting amount of money into another currency
const convert = configuration => {
    const { amount, to, from, response, loading } = configuration; //receive information and put it into variables

    money.base = response.body.base; //get the base of the rates
    money.rates = response.body.rates; //get the rates of each currency

    //For each currencies wanted by the user (or choosen by default) we will search the conversion rate
    to.forEach(item => {
        if (currencies[item]) {
            loading.succeed(
                `${chalk.green(
                    money.convert(amount, { from, 'to': item }).toFixed(2)
                )} ${`(${item})`} ${currencies[item]}`
            );
        } else {
            loading.warn(`${chalk.yellow(` The ${item} currency not found `)}`);
        }
    });

    console.log();
    console.log(
        chalk.underline.gray(
            ` Conversion of ${chalk.bold(from)} ${chalk.bold(amount)}`
        )
    );
    process.exit(1);
};

//Main function : handle the conversion of an amount of money into another currency
//Call the API and call the convert function
const cash = async command => {
    //Get the information for the conversion defined in the command in function of what the user asked for
    const amount = command.amount;
    const from = command.from.toUpperCase(); //and put the currencies into UpperCase
    const to = command.to
        .filter(item => item !== from)
        .map(item => item.toUpperCase());

    console.log();
    const loading = ora({
        'text': 'Converting currency...',
        'color': 'green',
        'spinner': {
            'interval': 200,
            'frames': to
        }
    });

    loading.start();

    try {
        const response = await got(API, { 'json': true }); //get the rates for each currency from the API (base is in EUR)

        convert({ amount, to, from, response, loading }); //call the convert method with the information got from the command
    } catch (err) { //handle errors
        if (err.code === 'ENOTFOUND') {
            loading.fail(chalk.red('   Please check your internet connection.\n'));
        } else {
            loading.fail(chalk.red('   Internal server error... \n'));
        }

        process.exit(1);
    }
};

module.exports = cash;
