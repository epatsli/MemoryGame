'use strict'
var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();

        view.giveNewParty();
        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });
        view.renderPieces(game.getPieces());
        highlight();
       // alert(customerNumberPieces.getAttribute("value"));
    },

    addPiece = function () {
        view.addPiece();
    },

    highlight = function () {
        view.highlight(game.getPieces());
};

    return {
        'startGame': startGame,
        'highlight': highlight,
        'addPiece': addPiece
    }
}();
