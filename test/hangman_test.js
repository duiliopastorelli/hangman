'use strict';
let expect = require('chai').expect;

describe('Setup Test', function () {
    it('Tests if the test suite is working', function () {
        expect(true).to.be.ok;
    })
});

describe('Hangman', function () {

    const Word = require('../js/Word').Word;
    let wordTest = new Word();

    it('Retrive a JSON from a web service', function () {
        console.log(wordTest.retrieveJSON());
        expect(wordTest.retrieveJSON()).to.be.a('array');
    });

    it('Get a set of words from the word provider', function () {
        let test = new Word();
        expect(test.getWord()).to.be.an('array');
    });

    it('Remove the words from the list that are shorter than 5 chars and longer than 10');

    it('choose a single word given an array');

    it('Never use the same word between different games');

    it('Choose a word randomly from the avaiable ones');

    it('Return an amount of dashes equal to the word length');

    it('Increase the penalty value each time the letter chosen is wrong');

    it('Accept only one char at time from the user, lowercase it and compare with the lowercase version of the chosen word');

    it('Close the game once the penalities value reach the maximum value');

    it('Keep in memory (and display) the letters already sent');

    it('Keep in memory (and display) the letters guessed');

    it('Check the solution provided against the chosen word');
});
