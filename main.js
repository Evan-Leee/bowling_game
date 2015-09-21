'use strict';

var Calculator = require('./src/calculator');

var calculator = new Calculator();

var input = 'X|X|X|X|X|X|X|X|X|X||XX';

var totalScore = calculator.eachGame(input);

console.log(totalScore);