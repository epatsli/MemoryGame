'use strict'
var view = (function () {

  var getInitialNumberOfPieces = function () {
        //donm
        return document.getElementById("initialNumberOfPieces").value;
    },
   // numberOfPieces = getInitialNumberOfPieces(),
        viewPieces= [],

    renderPieces = function (pieces) {
        var i, piece;
        for (i = 0; i < pieces.length; i++) {
            piece = document.createElement("div");
            piece.classList.add('piece');
            document.getElementById('pieces').appendChild(piece);
            viewPieces.push(piece);
        }
    },

    highlight = function (pieces) {
        var i;
        for (i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                viewPieces[i].style.backgroundColor = "#0000FF";
            }
        }
       // viewPieces[0].style.backgroundColor= "#0000FF";
        // pieces[0].style.backgroundColor= "#0000FF";
    },

    giveNewParty = function () {
        var pieces = document.getElementsByClassName('piece');
        while (pieces.length > 0) {
            pieces[0].parentNode.removeChild(pieces[0]);
        }
    };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlight': highlight,
        'giveNewParty': giveNewParty,

    }
})();
