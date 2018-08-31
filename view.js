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

        //numberOfPieces = getInitialNumberOfPieces(),
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


        /*
            addPiece  = function () {
                return numberOfPieces++;
            },
        */
        highlight = function (pieces) {
            var i, id = document.getElementById('myBtn');
            id.disabled = true;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    viewPieces[i].setAttribute('style', 'background-color: #0000FF');
                }
            }
        },

        printAndAddClick = function (pieces) {
            setTimeout(function () {
                printBlack(pieces)
            }, 1000 * getTime());
            setTimeout(function () {
                addClick(), addClickButton();
            }, 1000 * getTime());

        },

        addClickButton = function () {
            var id = document.getElementById('myBtn');
            id.removeAttribute('disabled');
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

        checkCorrectPieces = function (id, click) {
            if (click) {
                //   document.getElementById(i).classList.add('correct');
                viewPieces[id].setAttribute('style', 'background-color: #00FF00');
            }
            else {
                // document.getElementById(i).classList.add('incorrect');
                viewPieces[id].setAttribute('style', 'background-color: #FF0000');
            }
        };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlight': highlight,
        'giveNewParty': giveNewParty,
        // 'addPiece': addPiece,
        'printAndAddClick': printAndAddClick,
        'addClick': addClick,
        'checkCorrectPieces': checkCorrectPieces,
        'addClickButton': addClickButton


    }
})();
