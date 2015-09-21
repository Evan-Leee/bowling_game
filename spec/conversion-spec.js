'use strict';
var Conversion = require('../src/conversion');
var Frame = require('../src/frame');
describe('Conversion',function(){

    describe('.converToFrames()',function(){

        it('can conver the input into the frames,each frame is a frame object',function(){
            var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
            var conversion = new Conversion();
            var frames = conversion.converToFrames(input);

            var result = frames.every(function(element){
               return element instanceof Frame;
            });

            expect(result).toBe(true);

        });
    });
});
