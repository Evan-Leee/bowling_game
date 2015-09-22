'use strict';
var Calculator = require('../src/calculator');
var Frame = require('../src/frame');
var Game = require('../src/game');

describe('Calculator', function () {

    describe('.calculateGame()', function () {
        it('should return the score of the game which frames is fixed', function () {

            var calculator = new Calculator();
            var game = new Game();
            game.frames = [
                new Frame(10, 0), new Frame(7, 3), new Frame(9, 0), new Frame(10, 0), new Frame(0, 8),
                new Frame(8, 2), new Frame(0, 6), new Frame(10, 0), new Frame(10, 0), new Frame(10, 0),
                new Frame(8, 1)
            ];

            var result = calculator.calculateGame(game);

            expect(result).toBe(167);
        });

        it('should return the score of the game which frames is all strike', function () {

            var calculator = new Calculator();
            var game = new Game();
            game.frames = [
                new Frame(10, 0), new Frame(10, 0), new Frame(10, 0), new Frame(10, 0), new Frame(10, 0),
                new Frame(10, 0), new Frame(10, 0), new Frame(10, 0), new Frame(10, 0), new Frame(10, 0),
                new Frame(10, 0), new Frame(10, 0)
            ];

            var result = calculator.calculateGame(game);

            expect(result).toBe(300);
        });

        it('should return the score of the game which input is all spare', function () {

            var calculator = new Calculator();
            var game = new Game();
            game.frames = [
                new Frame(5, 5), new Frame(5, 5), new Frame(5, 5), new Frame(5, 5), new Frame(5, 5),
                new Frame(5, 5), new Frame(5, 5), new Frame(5, 5), new Frame(5, 5), new Frame(5, 5),
                new Frame(5, 0)
            ];

            var result = calculator.calculateGame(game);

            expect(result).toBe(150);
        });

        it('should return the score of the game which input is all miss', function () {

            var calculator = new Calculator();
            var game = new Game();
            game.frames = [
                new Frame(9, 0), new Frame(9, 0), new Frame(9, 0), new Frame(9, 0), new Frame(9, 0),
                new Frame(9, 0), new Frame(9, 0), new Frame(9, 0), new Frame(9, 0), new Frame(9, 0)
            ];

            var result = calculator.calculateGame(game);

            expect(result).toBe(90);
        });

        it('should return the score of the game which input is all number', function () {

            var calculator = new Calculator();
            var game = new Game();
            game.frames = [
                new Frame(4, 5), new Frame(4, 5), new Frame(4, 5), new Frame(4, 5), new Frame(4, 5),
                new Frame(4, 5), new Frame(4, 5), new Frame(4, 5), new Frame(4, 5), new Frame(4, 5)
            ];

            var result = calculator.calculateGame(game);

            expect(result).toBe(90);
        });
    });

    var frames, calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    describe('.strikeFrame()', function () {
        it("when a frame is strike ,the next is strike, the third is strike ", function () {
            frames = [
                new Frame(10,0),
                new Frame(10,0),
                new Frame(10,0)
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(30);
        });

        it("when a frame is strike ,the next is strike, the third is spare ", function () {
            frames = [
                new Frame(10,0),
                new Frame(10,0),
                new Frame(5,5)
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(25);
        });

        it("when a frame is strike ,the next is strike, the third is miss(N-) ", function () {
            frames = [
                new Frame(10,0),
                new Frame(10,0),
                new Frame(5,0)
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(25);
        });

        it("when a frame is strike ,the next is strike, the third is miss(-N) ", function () {
            frames = [
                new Frame(10,0),
                new Frame(10,0),
                new Frame(0,5)
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(20);
        });

        it("when a frame is strike ,the next is spare ", function () {
            frames = [
                new Frame(10,0),
                new Frame(5,5)
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(20);
        });

        it("when a frame is strike ,the next is miss(N-) ", function () {
            frames = [
                new Frame(10,0),
                new Frame(5,0)
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(15);
        });

        it("when a frame is strike ,the next is miss(-N) ", function () {
            frames = [
                new Frame(10,0),
                new Frame(0,5)
            ];
            var nextFrame = frames[1];
            var thirdFrame = frames[2];

            var result = calculator.strikeFrame(nextFrame, thirdFrame);

            expect(result).toBe(15);
        });
    });

    describe('.spareFrame()', function () {
        it("when a frame is spare ,the next is strike ", function () {
            frames = [
                new Frame(5,5),
                new Frame(10,0)
            ];
            var nextFrame = frames[1];

            var result = calculator.spareFrame(nextFrame);

            expect(result).toBe(20);
        });

        it("when a frame is spare ,the next is spare ", function () {
            frames = [
                new Frame(5,5),
                new Frame(5,5)
            ];
            var nextFrame = frames[1];

            var result = calculator.spareFrame(nextFrame);

            expect(result).toBe(15);
        });

        it("when a frame is spare ,the next is miss(N-) ", function () {
            frames = [
                new Frame(5,5),
                new Frame(5,0)
            ];
            var nextFrame = frames[1];

            var result = calculator.spareFrame(nextFrame);

            expect(result).toBe(15);
        });

        it("when a frame is spare ,the next is miss(-N) ", function () {
            frames = [
                new Frame(5,5),
                new Frame(0,5)
            ];
            var nextFrame = frames[1];

            var result = calculator.spareFrame(nextFrame);

            expect(result).toBe(10);
        });
    });

    describe('.normalFrame()', function () {
        it("when a frame is miss(N-) ", function () {
            var frame = new Frame(5,0);

            var result = calculator.normalFrame(frame);

            expect(result).toBe(5);
        });

        it("when a frame is miss(-N) ", function () {
            var frame = new Frame(0,5);

            var result = calculator.normalFrame(frame);

            expect(result).toBe(5);
        });

        it("when a frame is all number ", function () {
            var frame = new Frame(4,5);

            var result = calculator.normalFrame(frame);

            expect(result).toBe(9);
        });
    });
});