'use strict';

var Score = require('./score');

var score = new Score();

var input = 'X|X|X|X|X|X|X|X|X|X||XX';

var totalScore = score.eachGame(input);

console.log(totalScore);