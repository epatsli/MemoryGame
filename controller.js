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
      //  view.addClickButton();
    },

    addPiece = function () {
        view.addPiece();
    },

    checkClick = function (id) {
        var initialNumber;
        if (game.checkClickedPiece(id)) {
            view.checkCorrectPieces(id, true);

            if (game.getAmountToGuess()===0){ //===game.getCorrectPieces()) {
             //   alert("Congratulations, you've moved to the next level");

                initialNumber = view.getInitialNumberOfPieces();
                initialNumber++;
                document.getElementById('initialNumberOfPieces').value = initialNumber;
                game.setInitialNumberOfPieces(initialNumber);
                setTimeout(function () {
                    alert("Congratulations, you've moved to the next level");
                    startGame();
                }, 500);
            }
            else{
                view.addClick();
            }
        }
        else{ view.checkCorrectPieces(id,false);
            setTimeout(function () {
                alert("GAME OVER");
            },100);

            setTimeout(function () {
                startGame();
            },1000);
        }
    },
        returnInitialNumberOfPiece = function () {
            return view.getInitialNumberOfPieces();
        };

    return {
        'startGame': startGame,
        'addPiece': addPiece,
        'checkClick': checkClick,
        'returnInitialNumberOfPiece': returnInitialNumberOfPiece
    }
}();
