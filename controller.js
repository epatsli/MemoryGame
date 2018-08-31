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
            view.printAndAddClick(state);
        },

        checkClick = function (id) {
            var initialNumber;
            if (game.checkClickedPiece(id)) {
                view.checkCorrectPieces(id, true);

                if (game.getAmountToGuess() === 0) {
                    initialNumber = view.getInitialNumberOfPieces();
                    initialNumber++;
                    document.getElementById('initialNumberOfPieces').value = initialNumber;
                    game.setCurrentNumberOfPieces(initialNumber);
                    setTimeout(function () {
                        view.congratulationsToNextLevel();
                        startGame();
                    }, 50);
                }
                else {
                    view.addClick();
                }
            }
            else {
                view.checkCorrectPieces(id, false);
                view.showInformationGameOver();
                setTimeout(function () {
                    startGame();
                }, 1000);
            }
        };

    return {
        'startGame': startGame,
        'checkClick': checkClick
    }
}();
