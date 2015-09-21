'use strict';

function Frame(balls) {
    this.firstBall = balls[0];
    this.secondBall = balls[1];
}

Frame.prototype.isStrike = function () {
    return this.firstBall === 'X' && !this.secondBall;
};

Frame.prototype.isSpare = function () {
    return this.secondBall === '/';
};

Frame.prototype.isMiss = function () {
    return this.firstBall === '-' || this.secondBall === '-';
};

module.exports = Frame;