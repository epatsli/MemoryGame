'use strict'
var controller = function () {
    var startGame = function () {
            var initialNumberOfPieces = view.getInitialNumberOfPieces(),
                state;

            game.startGame({
                numberOfPieces: initialNumberOfPieces
            });

            state = game.getPieces();
            view.giveNewParty();
            view.renderPieces(state);
            view.highlight(state);
            view.turnOffHighlight(state);
        },
        newGame = function () {
            view.startNewGame();
            startGame();
        },
        checkClick = function (id) {
            var initialNumber;
            if (game.checkClickedPiece(id)) {
                view.checkCorrectPieces(id, true);

                if (game.getAmountToGuess() === 0) {
                    view.removeClick();
                    setTimeout(function () {
                        view.congratulationsToNextLevel();
                    }, 50);
                    initialNumber = view.setInitialNumberOfPiece();
                    game.setCurrentNumberOfPieces(initialNumber);
                    setTimeout(function () {
                        startGame();
                    }, 1000);
                }
                else {
                    view.addClick();
                }
            }
            else {
                view.checkCorrectPieces(id, false);
                view.removeClick();
                view.showInformationGameOver();
                setTimeout(function () {
                    newGame();
                }, 1000);
            }
        };

    return {
        'startGame': startGame,
        'checkClick': checkClick,
        'newGame': newGame
    }
}();
