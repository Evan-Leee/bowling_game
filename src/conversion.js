'use strict';
var Frame = require('./frame');

function Conversion() {

}

Conversion.prototype.converToFrames = function (input) {
    var temp = input.split('|');
    temp.splice(10, 1);

    if (temp[temp.length - 1] === 'XX') {
        temp[temp.length - 1] = 'X';
        temp.push('X');
    }

    var frames = [];
    temp.forEach(function(balls){
        frames.push(new Frame(balls));
    });

    return frames;
};

module.exports = Conversion;