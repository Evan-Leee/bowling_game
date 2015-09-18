'use strict';

function Score() {

}

Score.prototype.eachGame = function (input) {
    var frames = input.split('|');
    frames.splice(10, 1);
    var score = 0;
    for (var i = 0; i < 10; i++) {
        score += this.eachFrame(frames, i);
    }
    return score;
};

Score.prototype.eachFrame = function (frames, index) {

    if (frames[frames.length - 1] === 'XX') {
        frames[frames.length - 1] = 'X';
        frames.push('X');
    }

    var frame = frames[index];
    var nextFrame = frames[index + 1];
    var thirdFrame = frames[index + 2];
    var score = 0;

    if (frame === 'X') {
        score += 10;
        if (nextFrame === 'X') {
            score += 10;
            if (thirdFrame === 'X') {
                score += 10;
            } else if (thirdFrame[0] !== '-') {
                score += thirdFrame[0] - 0;
            }
        } else if (nextFrame.indexOf('/') !== -1) {
            score += 10;
        } else if (nextFrame.indexOf('-') !== -1) {
            score += (nextFrame[0] === '-') ? nextFrame[1] - 0 : nextFrame[0] - 0;
        } else {
            score += nextFrame[0] - 0;
            score += nextFrame[1] - 0;
        }
    } else if (frame.indexOf('/') !== -1) {
        score += 10;
        if (nextFrame === 'X') {
            score += 10;
        } else if (nextFrame[0] !== '-') {
            score += nextFrame[0] - 0;
        }
    } else if (frame.indexOf('-') !== -1) {
        score += (frame[0] === '-') ? frame[1] - 0 : frame[0] - 0;
    } else {
        score += nextFrame[0] - 0;
        score += nextFrame[1] - 0;
    }
    return score;
};

module.exports = Score;