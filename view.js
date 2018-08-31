'use strict'
var view = (function () {

    var getInitialNumberOfPieces = function () {
            var initialNumber = document.getElementById("initialNumberOfPieces").value;

            if (initialNumber < 4) {
                initialNumber = 4;
                document.getElementById('initialNumberOfPieces').value = "4";
            }
            return initialNumber;
        },

        viewPieces,

        renderPieces = function (pieces) {
            var i, piece;
            viewPieces = [];
            for (i = 0; i < pieces.length; i++) {
                piece = document.createElement("div");
                piece.classList.add('piece');
                piece.setAttribute('id', i);
                document.getElementById('pieces').appendChild(piece);
                viewPieces.push(piece);
            }
        },

        highlight = function (pieces) {
            var i;
            disableButton();
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    viewPieces[i].setAttribute('style', 'background-color: #0000FF');
                }
            }
        },

        disableButton = function () {
            var idHighlight = document.getElementById('highlight'),
                idNewGame = document.getElementById('newGame');

            idHighlight.disabled = true;
            idNewGame.disabled = true;
        },

        printAndAddClick = function (pieces) {
            setTimeout(function () {
                printBlack(pieces)
            }, 1000 * getTime());
            setTimeout(function () {
                addClick(),
                enableButton();
            }, 1000 * getTime());

        },

        enableButton = function () {
            var idHighlight = document.getElementById('highlight'),
                idNewGame = document.getElementById('newGame');
            idHighlight.removeAttribute('disabled');
            idNewGame.removeAttribute('disabled');
        },

        printBlack = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {
                viewPieces[i].setAttribute('style', 'background-color: #000000');
            }
        },

        getTime = function () {
            return document.getElementById('time').value;
        },

        giveNewParty = function () {
            var pieces = document.getElementsByClassName('piece');
            while (pieces.length > 0) {
                pieces[0].parentNode.removeChild(pieces[0]);
            }
        },

        addClick = function () {
            var piece = document.getElementById('pieces').children,
                i;
            for (i = 0; i < piece.length; i++) {
                document.getElementById(i).setAttribute("onclick", "controller.checkClick(" + i + ")");
            }
        },

        removeClick = function () {
            var piece = document.getElementById('pieces').children,
                i;
            for (i = 0; i < piece.length; i++) {
                document.getElementById(i).removeAttribute('onclick');
            }
        },

        checkCorrectPieces = function (id, click) {
            if (click) {
                viewPieces[id].setAttribute('style', 'background-color: #00FF00');
            }
            else {
                viewPieces[id].setAttribute('style', 'background-color: #FF0000');
            }
        },

        congratulationsToNextLevel = function () {
        var currentNumber=document.getElementById('initialNumberOfPieces').value, level;
        level=currentNumber-3;
            alert("Congratulations, you've moved to the "+level+" level!");
        },

        startNewGame = function () {
            document.getElementById('initialNumberOfPieces').value = "4";
        },

        showInformationGameOver = function () {
            setTimeout(function () {
                alert("GAME OVER");
            }, 50);
        },
        setInitialNumberOfPiece = function () {
            var initialNumber;
            initialNumber = getInitialNumberOfPieces();
            initialNumber++;
            document.getElementById('initialNumberOfPieces').value = initialNumber;
        };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlight': highlight,
        'giveNewParty': giveNewParty,
        'printAndAddClick': printAndAddClick,
        'addClick': addClick,
        'checkCorrectPieces': checkCorrectPieces,
        'congratulationsToNextLevel': congratulationsToNextLevel,
        'showInformationGameOver': showInformationGameOver,
        'startNewGame': startNewGame,
        'setInitialNumberOfPiece': setInitialNumberOfPiece,
        'removeClick': removeClick
    }
})();
