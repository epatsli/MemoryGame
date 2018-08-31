'use strict'
var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();
            var state=game.getPieces();
        view.giveNewParty();
        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.renderPieces(state);
        view.highlight(state);
        view.printAndAddClick(state);
       // alert(customerNumberPieces.getAttribute("value"));
    },

    addPiece = function () {
        view.addPiece();
    },
    checkClick = function (id) {
        var initialNumber;
       // alert("Hello! I am an alert box!!" + id);
        if (game.checkClickedPiece(id)) {
            view.checkCorrectPieces(id, true);

            if (game.getAmountToGuess()===0){ //===game.getCorrectPieces()) {
                initialNumber = view.getInitialNumberOfPieces();
                initialNumber++;
                document.getElementById('initialNumberOfPieces').value = initialNumber;
                game.setInitialNumberOfPieces(initialNumber);
                //  addPiece();
                startGame();
            }
            else{
                view.addClick();
            }


        }
        else{ view.checkCorrectPieces(id,false);
            setTimeout(function () {
                startGame();
            }, 1000);
        }

    };

    return {
        'startGame': startGame,
      //  'highlight': highlight,
        'addPiece': addPiece,
        'checkClick': checkClick
    }
}();
