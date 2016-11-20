'use strict';
var expect = require('chai').expect;

describe('Setup Test', function () {
    it('Tests if the test suite is working', function () {
        expect(true).to.be.ok;
    })
});

/*
Once the web app is loaded the 1st time it gets a set of words from the (***words provider.getWords***) and makes them available for the "offline page".
Once the user goes off-line a notice is displayed and a button is available for start the game (***game.start***).
The user click on the button and a word is chosen from the available ones (***chose word***). A certain amount of dashes will be displayed on the screen, as much as the word chars. (***display dashes***).
The hangman is displayed on the top of the page, with a partial opacity on it's elements. (***hangman***).
An input field is available to the user and it accept only 1 char per time (***input***).
A button allows the user to check if the selected char is present in the chosen word (***input.submit***).

- Should retrieve a list of random words consuming an api
- Should randomize the words and never reuse them between different games
- Should remove the words from the list that are shorter than 5 chars and longer than 10
- Should choose a single word
- Should get the user input (1 char), lowercase it and compare with the lowercase version of the chosen word
- Should add 1 penality if the input is not inside the chosen word and display the matching chars if it's correct
- Should detect the hanged man and close the game (game over)
- Should display the inputs already provided
- Should display the chars guessed
- Should allow the user to provide the solution
 */