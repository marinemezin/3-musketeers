# Cash

> Description

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Introduction](#introduction)
- [What this program does](#what-this-program-does)
- [How to install dependencies](#how-to-install-dependencies)
- [How to execute it](#how-to-execute-it)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction
You want to convert your money into another currency ? This is the code for you.


## What this program does
This program aim to convert an amount of money in a currency to another currency. <br/>
All you have to do is to precise the wanted amount and the currency in the command line before running the program.

## How to install dependencies
* Open a new terminal
* Go into your project folder cash
```sh
❯ cd YOUR_FOLDER_AFTER_CLONING_ON_YOUR_COMPUTER\3-musketeers\cash
```
* Type and enter
```sh
❯ npm install
```


## How to execute it
1- Go into the bin folder
```sh
❯ cd YOUR_FOLDER_AFTER_CLONING_ON_YOUR_COMPUTER\3-musketeers\cash\bin
```
2- Execute the program
* Open the help
```sh
❯ node index.js --help
```
* Save default currencies
```sh
❯ node index.js --save CURRENCY1 CURRENCY2 CURRENCY3 ETC
```
* Convert money
X is a number -> the amount of money you want to convert <br/>
Y is 3 letters corresponding to your actual currency
```sh
❯ node index.js X Y
```
You will get a conversion of your amount in the default currencies your saved.
* Convert money
X is a number -> the amount of money you want to convert <br/>
Y is 3 letters corresponding to your actual currency
Y1, Y2 ETC -> are currencies whose the conversion you want to know
```sh
❯ node index.js X Y Y1, Y2 ETC
```
You will get a conversion of your amount in the default currencies your saved.

## Licence
