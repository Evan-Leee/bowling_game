'use strict';
var Game = require('../src/game');
var Frame = require('../src/frame');

describe('Game',function(){

    describe('.setFrames()',function(){

        it('can set the value of the frames in each game which is a frame object',function(){
            var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
            var game = new Game();
            game.setFrames(input);

            var result = game.frames.every(function(element){
               return element instanceof Frame;
            });

            expect(result).toBe(true);

        });
    });
});
