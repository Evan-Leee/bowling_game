'use strict';

function Frame(firstBall, secondBall) {
    this.firstBall = firstBall;
    this.secondBall = secondBall;
}

Frame.prototype.isStrike = function () {
    return this.firstBall === 10 && !this.secondBall;
};

Frame.prototype.isSpare = function () {
    return (this.firstBall + this.secondBall) === 10 && this.firstBall !== 10;
};

Frame.prototype.isMiss = function () {
    return (this.firstBall === 0 || this.secondBall === 0) && this.firstBall !== 10;
};

module.exports = Frame;