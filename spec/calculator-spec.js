'use strict';
var Calculator = require('../src/calculator');
var Frame = require('../src/frame');

describe('Calculator', function () {

    describe('.eachGame()', function () {
        it('should return the score of the game which input is fixed', function () {

            var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
            var calculator = new Calculator();

            var result = calculator.eachGame(input);

            expect(result).toBe(167);
        });

        it('should return the score of the game which input is all strike', function () {

            var input = 'X|X|X|X|X|X|X|X|X|X||XX';
            var calculator = new Calculator();

            var result = calculator.eachGame(input);

            expect(result).toBe(300);
        });

        it('should return the score of the game which input is all spare', function () {

            var input = '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5';
            var calculator = new Calculator();

            var result = calculator.eachGame(input);

            expect(result).toBe(150);
        });

        it('should return the score of the game which input is all miss', function () {

            var input = '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||';
            var calculator = new Calculator();

            var result = calculator.eachGame(input);

            expect(result).toBe(90);
        });

        it('should return the score of the game which input is all number', function () {

            var input = '45|45|45|45|45|45|45|45|45|45||';
            var calculator = new Calculator();

            var result = calculator.eachGame(input);

            expect(result).toBe(90);
        });
    });

    var frames, calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    describe('.strikeFrame()',function(){
        it("when a frame is 'X' ,the next is 'X', the third is 'X' ", function () {
            frames = [
                new Frame('X'),
                new Frame('X'),
                new Frame('X')
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(30);
        });

        it("when a frame is 'X' ,the next is 'X', the third is 'N/' ", function () {
            frames = [
                new Frame('X'),
                new Frame('X'),
                new Frame('5/')
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(25);
        });

        it("when a frame is 'X' ,the next is 'X', the third is 'N-' ", function () {
            frames = [
                new Frame('X'),
                new Frame('X'),
                new Frame('5-')
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(25);
        });

        it("when a frame is 'X' ,the next is 'X', the third is '-N' ", function () {
            frames = [
                new Frame('X'),
                new Frame('X'),
                new Frame('-5')
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(20);
        });

        it("when a frame is 'X' ,the next is 'N/' ", function () {
            frames = [
                new Frame('X'),
                new Frame('5/')
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(20);
        });

        it("when a frame is 'X' ,the next is 'N-' ", function () {
            frames = [
                new Frame('X'),
                new Frame('5-')
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(15);
        });

        it("when a frame is 'X' ,the next is '-N' ", function () {
            frames = [
                new Frame('X'),
                new Frame('-5')
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(15);
        });
    });

    describe('.spareFrame()',function(){
        it("when a frame is 'N/' ,the next is 'X' ", function () {
            frames = [
                new Frame('5/'),
                new Frame('X')
            ];
            var nextFrame = frames[1];

            var result = calculator.spareFrame(nextFrame);

            expect(result).toBe(20);
        });

        it("when a frame is 'N/' ,the next is 'N/' ", function () {
            frames = [
                new Frame('5/'),
                new Frame('5/')
            ];
            var nextFrame = frames[1];

            var result = calculator.spareFrame(nextFrame);

            expect(result).toBe(15);
        });

        it("when a frame is 'N/' ,the next is 'N-' ", function () {
            frames = [
                new Frame('5/'),
                new Frame('5-')
            ];
            var nextFrame = frames[1];

            var result = calculator.spareFrame(nextFrame);

            expect(result).toBe(15);
        });

        it("when a frame is 'N/' ,the next is '-N' ", function () {
            frames = [
                new Frame('5/'),
                new Frame('-5')
            ];
            var nextFrame = frames[1];

            var result = calculator.spareFrame(nextFrame);

            expect(result).toBe(10);
        });
    });

    describe('.normalFrame()',function(){
        it("when a frame is 'N-' ", function () {
            var frame = new Frame('5-');

            var result = calculator.normalFrame(frame);

            expect(result).toBe(5);
        });

        it("when a frame is '-N' ", function () {
            var frame = new Frame('-5');

            var result = calculator.normalFrame(frame);

            expect(result).toBe(5);
        });

        it("when a frame is 'NN' ", function () {
            var frame = new Frame('45');

            var result = calculator.normalFrame(frame);

            expect(result).toBe(9);
        });
    });
});