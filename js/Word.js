'use strict';

class Word {
    constructor(uri, lowLimit, highLimit) {
        this.uri = uri;
        this.lowLimit = lowLimit;
        this.highLimit = highLimit;
    }

    getWord() {
        let availableWords = this.retrieveJSON(this.uri);

        return "dysfunctional";
    }

    retrieveJSON(uri){
        let data = require(uri);
        return data.words;
    }

    checkShortnerWord(word, limit) {
        return word.length < limit;
    }
}

module.exports.Word = Word;
