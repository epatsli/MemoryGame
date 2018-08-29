'use strict'
var view = (function () {
    var getInitialNumberOfPieces = function () {
        //donm
        return document.getElementById("initialNumberOfPieces").value;
    };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces
    }
})();
