'use strict'

var Piece = function (isPieceToGuess, pieceNumber) {
    this.toGuess = isPieceToGuess;
    this.pieceIsGuessed = false;
    this.pieceNumber = pieceNumber;
}

var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        amountToGuess=1,
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

            for(i=0; i < currentNumberOfPieces; i++) {
                pieces.push({});
            }

            amountToGuess=calculateAmountToGuess(pieces.length);

            pieces[0].toGuess = true;

            return pieces;
        },

       calculateAmountToGuess = function(amountToGuess){
            return Math.floor(amountToGuess/2 - 1);
        };

    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'calculateAmountToGuess': calculateAmountToGuess
    }
})();
