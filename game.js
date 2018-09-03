'use strict'

var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces = 4,
        amountToGuess = 1,
        current=[],
        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
        },

        getPieces = function () {
            var i,
                pieces = [];
            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
            }

            amountToGuess = calculateAmountToGuess(pieces.length);

            for (i = 0; i < amountToGuess; i++) {
                var number = findPiecesToGuess(pieces.length);
                while (pieces[number].toGuess === true) {
                    number = findPiecesToGuess(pieces.length);
                }
                pieces[number].toGuess = true;
            }
            current = pieces;
            return pieces;
        },

        calculateAmountToGuess = function (pieceLength) {
            return Math.floor(pieceLength / 2) - 1;
        },

        findPiecesToGuess = function (pieceLength) {
            return Math.floor(Math.random() * pieceLength);
        },

        checkClickedPiece = function (id) {
            if (current[id].toGuess == true) {
                current[id].toGuess = false;
                amountToGuess--;
                return true;
            }
            return false;
        },

        getAmountToGuess = function () {
            return amountToGuess;
        },
        setCurrentNumberOfPieces = function (numberOfPieces) {
            return currentNumberOfPieces = numberOfPieces;
        };

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'calculateAmountToGuess': calculateAmountToGuess,
        'checkClickedPiece': checkClickedPiece,
        'getAmountToGuess': getAmountToGuess,
        'setCurrentNumberOfPieces': setCurrentNumberOfPieces
    }
})();
