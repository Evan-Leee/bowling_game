'use strict';
var Conversion = require('./conversion');
var STRIKE_FRAME_BASIC_SCORE = 10;
var SPARE_FRAME_BASIC_SCORE = 10;
var BASIC_FRAME_NUMBER = 10;

function Calculator() {

}

Calculator.prototype.eachGame = function (input) {
    var conversion = new Conversion();
    var frames = conversion.converToFrames(input);
    var score = 0;

    for (var i = 0; i < BASIC_FRAME_NUMBER; i++) {
        var frame = frames[i];
        var nextFrame = frames[i + 1];
        var thirdFrame = frames[i + 2];

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

    if (nextFrame.isStrike()) {
        score += STRIKE_FRAME_BASIC_SCORE;

        if (thirdFrame.isStrike()) {
            score += STRIKE_FRAME_BASIC_SCORE;

        } else if (thirdFrame.firstBall !== '-') {
            score += parseInt(thirdFrame.firstBall);
        }
    } else if (nextFrame.isSpare()) {
        score += SPARE_FRAME_BASIC_SCORE;

    } else if (nextFrame.isMiss()) {
        score += (nextFrame.firstBall === '-') ? parseInt(nextFrame.secondBall) : parseInt(nextFrame.firstBall);

    } else {
        score += parseInt(nextFrame.firstBall);
        score += parseInt(nextFrame.secondBall);
    }
    return score;
};

Calculator.prototype.spareFrame = function (nextFrame) {
    var score = 0;
    score += SPARE_FRAME_BASIC_SCORE;

    if (nextFrame.isStrike()) {
        score += STRIKE_FRAME_BASIC_SCORE;

    } else if (nextFrame.firstBall !== '-') {
        score += parseInt(nextFrame.firstBall);
    }

    return score;
};

Calculator.prototype.normalFrame = function (frame) {
    var score = 0;

    if (frame.isMiss()) {
        score += (frame.firstBall === '-') ? parseInt(frame.secondBall) : parseInt(frame.firstBall);

    } else {
        score += parseInt(frame.firstBall);
        score += parseInt(frame.secondBall);
    }
    return score;
};

module.exports = Calculator;