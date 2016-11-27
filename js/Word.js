'use strict';

class Word {
    constructor(word) {
        this.word = word;
    }

    retrieveJSON(){
        let data = require('../mocks/words.json');
        // let data = '{"words": ["drain","terrific","dysfunctional","new"]}';
        // let result = JSON.parse(data);
        return data.words;
    }

    getWord(){

        let foo = ['foo','bar','baz'];
        return foo
        //return this.word
    }
}

module.exports.Word = Word;
