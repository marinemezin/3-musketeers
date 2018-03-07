#!/usr/bin/env node

// Adding dependencies
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

// Create a new configuration
const config = new Conf();

//Create a tab with all the arguments
const argv = process.argv.slice(2);

//Check if "--help" or "--save" or "--version" has been entered in the arguments
helpers(argv);

//Create a command to know what configuration to use based on the arguments entered
//Get the arguments and check if there's no argument he get the default value
const command = {
  'amount': argv[0] || 1, //if no amount then he tooks the value 1
  'from': argv[1] || config.get('defaultFrom', 'USD'), //if no currency he gets the default currencies for USD from the config file
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};

//Call the function cash with the command just created
cash(command);
