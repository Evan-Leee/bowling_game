'use strict';
var Score = require('../src/score');

describe('Score', function () {

    describe('.eachGame', function () {
        it('should return the score of each game', function () {

            var input = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
            var score = new Score();

            var result = score.eachGame(input);

            expect(result).toBe(167);
        });
    });

    describe('.eachFrame', function () {
        var frames, score;

        beforeEach(function () {
            score = new Score();
        });

        it("when a frame is 'X' ,the next is 'X', the third is 'X' ", function () {
            frames = ['X', 'X', 'X'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(30);
        });

        it("when a frame is 'X' ,the next is 'X', the third is 'XX' ", function () {
            frames = ['X', 'X', 'XX'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(30);
        });

        it("when a frame is 'X' ,the next is 'X', the third is 'N/' ", function () {
            frames = ['X', 'X', '5/'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(25);
        });

        it("when a frame is 'X' ,the next is 'X', the third is 'N-' ", function () {
            frames = ['X', 'X', '5-'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(25);
        });

        it("when a frame is 'X' ,the next is 'X', the third is '-N' ", function () {
            frames = ['X', 'X', '-5'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(20);
        });

        it("when a frame is 'X' ,the next is 'XX' ", function () {
            frames = ['X', 'XX'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(30);
        });

        it("when a frame is 'X' ,the next is 'N/' ", function () {
            frames = ['X', '5/'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(20);
        });

        it("when a frame is 'X' ,the next is 'N-' ", function () {
            frames = ['X', '5-'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(15);
        });

        it("when a frame is 'X' ,the next is '-N' ", function () {
            frames = ['X', '-5'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(15);
        });

        it("when a frame is 'N/' ,the next is 'X' ", function () {
            frames = ['5/', 'X'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(20);
        });

        it("when a frame is 'N/' ,the next is 'XX' ", function () {
            frames = ['5/', 'X'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(20);
        });

        it("when a frame is 'N/' ,the next is 'N/' ", function () {
            frames = ['5/', '5/'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(15);
        });

        it("when a frame is 'N/' ,the next is 'N-' ", function () {
            frames = ['5/', '5-'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(15);
        });

        it("when a frame is 'N/' ,the next is '-N' ", function () {
            frames = ['5/', '-5'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(10);
        });

        it("when a frame is 'N-' ", function () {
            frames = ['5-'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(5);
        });

        it("when a frame is '-N' ", function () {
            frames = ['-5'];

            var result = score.eachFrame(frames, 0);

            expect(result).toBe(5);
        });
    });
});