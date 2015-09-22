'use strict';
var Game = require('./src/game');
var Calculator = require('./src/calculator');

var calculator = new Calculator();
var game = new Game();

var input = 'X|X|X|X|X|X|X|X|X|X||XX';
game.setFrames(input);

var totalScore = calculator.calculateGame(game);

console.log(totalScore);