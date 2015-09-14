'use strict';

var Score = require('./score');

var score = new Score();

var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';

var totalScore = score.eachGame(input);

console.log(totalScore);