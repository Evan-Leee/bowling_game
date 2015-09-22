'use strict';
var Frame = require('../src/frame');
describe('Frame', function () {
    var frame;

    describe('.isStrike()', function () {
        it('when frame is strike it should return true', function () {
            frame = new Frame(10, 0);

            var result = frame.isStrike();

            expect(result).toBe(true);
        });

        it('when frame is spare it should return false', function () {
            frame = new Frame(5,5);

            var result = frame.isStrike();

            expect(result).toBe(false);
        });

        it('when frame is miss it should return false', function () {
            frame = new Frame(5,0);

            var result = frame.isStrike();

            expect(result).toBe(false);
        });

        it('when frame is all number it should return false', function () {
            frame = new Frame(5,4);

            var result = frame.isStrike();

            expect(result).toBe(false);
        });

    });

    describe('.isSpare()', function () {
        it('when frame is strike it should return false', function () {
            frame = new Frame(10,0);

            var result = frame.isSpare();

            expect(result).toBe(false);
        });

        it('when frame is spare it should return true', function () {
            frame = new Frame(5,5);

            var result = frame.isSpare();

            expect(result).toBe(true);
        });

        it('when frame is miss it should return false', function () {
            frame = new Frame(5,0);

            var result = frame.isSpare();

            expect(result).toBe(false);
        });

        it('when frame is all number it should return false', function () {
            frame = new Frame(5,4);

            var result = frame.isSpare();

            expect(result).toBe(false);
        });
    });

    describe('isMiss()', function () {
        it('when frame is strike it should return false', function () {
            frame = new Frame(10,0);

            var result = frame.isMiss();

            expect(result).toBe(false);
        });

        it('when frame is spare it should return false', function () {
            frame = new Frame(5,5);

            var result = frame.isMiss();

            expect(result).toBe(false);
        });

        it('when frame is miss it should return true', function () {
            frame = new Frame(5,0);

            var result = frame.isMiss();

            expect(result).toBe(true);
        });

        it('when frame is all number it should return false', function () {
            frame = new Frame(5,4);

            var result = frame.isMiss();

            expect(result).toBe(false);
        });
    });
});
