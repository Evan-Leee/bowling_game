'use strict';
var Frame = require('./frame');

function Game() {
    this.frames = [];
}

Game.prototype.setFrames = function (input) {
    var temp = input.split('|');
    temp.splice(10, 1);

    if (temp[temp.length - 1] === 'XX') {
        temp[temp.length - 1] = 'X';
        temp.push('X');
    }

    var _this = this;
    temp.forEach(function(balls){
        var firstBall = balls[0];
        var secondBall = balls[1];

        firstBall = (firstBall === 'X') ? 10 : parseInt(firstBall) || 0;
        secondBall = (secondBall === '/') ? 10 - firstBall : parseInt(secondBall) || 0;

        _this.frames.push(new Frame(firstBall,secondBall));
    });

};

module.exports = Game;