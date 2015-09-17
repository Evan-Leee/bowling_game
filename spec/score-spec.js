'use strict';
var Score = require('../src/score');

describe('Score',function(){

    describe('.eachGame',function(){
        it('should return the score of each game',function(){
            var inputs = [
                'X|X|X|X|X|X|X|X|X|X||XX',
                '9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||',
                '5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5',
                'X|7/|9-|X|-8|8/|-6|X|X|X||81',
                'X|X|7/|X|X|5/|X|X|2/|X||5/',
                'X|X|7/|X|X|5/|X|X|2/|X||9-'
            ];
            var score = new Score();
            var results = [];
            inputs.forEach(function(input){
                results.push(score.eachGame(input));
            });
            expect(results.toString()).toBe('300,90,150,167,214,213');
        });
    });

    describe('.eachFrame',function(){

        it('should return the score of each frame',function(){
            var frames = ['X','7/','9-','X','-8','8/','-6','X','X','X','81'];
            var score = new Score();
            var results = [];
            for(var i = 0; i < 10; i++){

                results.push(score.eachFrame(frames,i));
            }
            expect(results.toString()).toBe('20,19,9,18,8,10,6,30,28,19');
        });
    });
});