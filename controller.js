'use strict'
var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces(),
            state=game.getPieces();
        view.giveNewParty();
        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });
        view.renderPieces(state);
        view.highlight(state);
       // highlight();
        view.printAndAddClick(state);
       // alert(customerNumberPieces.getAttribute("value"));
    },

    addPiece = function () {
        view.addPiece();
    },


/*
    highlight = function () {
        view.highlight(game.getPieces());
    },
*/

    checkClick = function (id) {

        alert("Hello! I am an alert box!!" + id);
        if (game.checkClickedPiece(id)) {
            view.checkCorrectPieces(id, true);



        }
        else{ view.checkCorrectPieces(id,false);}
       // view.checkCorrectPieces(id, game.checkClickedPiece(id));

     //   view.correct(game.getPieces());
    };

    return {
        'startGame': startGame,
      //  'highlight': highlight,
        'addPiece': addPiece,
        'checkClick': checkClick
    }
}();
