# Cash

> Description

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Introduction](#introduction)
- [What this program does](#what-this-program-does)
- [How to install dependencies](#how-to-install-dependencies)
- [How to execute it](#how-to-execute-it)

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
* Convert money
X is a number -> the amount of money you want to convert <br/>
Y is 3 letters corresponding to your actual currency
```sh
❯ node index.js X Y
```
You will get a conversion of your amount in the default currencies your saved.<br/><br/>
* Convert money
X is a number -> the amount of money you want to convert <br/>
Y is 3 letters corresponding to your actual currency
Y1, Y2 ETC -> are currencies whose the conversion you want to know
```sh
❯ node index.js X Y Y1, Y2 ETC
```
You will get a conversion of your amount in the currencies your asked for.<br/><br/>
* Open the help
```sh
❯ node index.js --help
```
* Save default currencies
CURRENCY 1 is the starting currency <br/>
CURRENCY2 and 3 are the final currencies
```sh
❯ node index.js --save CURRENCY1 CURRENCY2 CURRENCY3 ETC
```
The next time you will ask for a conversion of an amount in your CURRENCY1 and you don't precise in which currencies you want to convert it, you will get the conversion in your default currencies saved here.

## What currency can you use ?

| Complete name      | Shortcut |
|--------------------|----------|
|"Australian Dollar" |"AUD"     |
|"Russian Rouble"    |"RUB"     |
|"Euro"              |"EUR"     |
|"Bulgarian Lev"     |"BGN"     |
|"Real Brazilian"    |"BRL"     |
|"Canadian Dollar"   |"CAD"     |
|"Swiss Franc"       |"CHF"     |
|"Chinese Yuan"      |"CNY"     |
|"Czech Koruna"      |"CZK"     |
|"Danish Krone"      |"DKK"     |
|"Pound Sterling"    |"GBP"     |
|"Hong Kong Dollar"  |"HKD"     |
|"Croatian Kuna"     |"HRK"     |
|"Hungarian Forint"  |"HUF"     |
|"Indonesian Rupiah" |"IDR"     |
|"Israeli Shekel"    |"ILS"     |
|"Indian Rupee"      |"INR"     |
|"Japanese Yen"      |"JPY"     |
|"South Korean Won"  |"KRW"     |
|"Mexican Peso"      |"MXN"     |
|"Malaysian Ringgit" |"MYR"     |
|"Norwegian Krone"   |"NOK"     |
|"Philippine Peso"   |"PHP"     |
|"Polish Zloty"      |"PLN"     |
|"Romanian New Leu"  |"RON"     |
|"Swedish Krona"     |"SEK"     |
|"Singapore Dollar"  |"SGD"     |
|"Thai Baht"         |"THB"     |
|"Turkish Lira"      |"TRY"     |
|"US Dollar"         |"USD"     |
|"South African Rand"|"ZAR"     |
|"New Zealand Dollar"|"NZD"     |