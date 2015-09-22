'use strict';

var STRIKE_FRAME_BASIC_SCORE = 10;
var SPARE_FRAME_BASIC_SCORE = 10;
var BASIC_FRAME_NUMBER = 10;

function Calculator() {

}

Calculator.prototype.calculateGame = function (game) {
    var score = 0;

    for (var i = 0; i < BASIC_FRAME_NUMBER; i++) {
        var frame = game.frames[i];
        var nextFrame = game.frames[i + 1];
        var thirdFrame = game.frames[i + 2];

        if (frame.isStrike()) {
            score += this.strikeFrame(nextFrame, thirdFrame);

        } else if (frame.isSpare()) {
            score += this.spareFrame(nextFrame);

        } else {
            score += this.normalFrame(frame);
        }
    }

    return score;
};

Calculator.prototype.strikeFrame = function (nextFrame, thirdFrame) {
    var score = 0;
    score += STRIKE_FRAME_BASIC_SCORE;
    score += nextFrame.firstBall;
    score += nextFrame.firstBall === 10 ? thirdFrame.firstBall : nextFrame.secondBall;

    return score;
};

Calculator.prototype.spareFrame = function (nextFrame) {
    var score = 0;
    score += SPARE_FRAME_BASIC_SCORE;
    score += nextFrame.firstBall ;

    return score;
};

Calculator.prototype.normalFrame = function (frame) {
    var score = 0;

    score += frame.firstBall + frame.secondBall;

    return score;
};

module.exports = Calculator;