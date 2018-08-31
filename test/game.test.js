describe('Game', function () {
   it('should have 4 pieces after game start', function () {
      var pieces;
      //zwracam 4
      game.startGame();

      pieces = game.getPieces();

      expect(pieces.length).toBe(4);
   });

    it('one pieces should be to guess after game start', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = findPiecesToGuess(game.getPieces());

        expect(piecesToGuess.length).toBe(1);
    });

    it('should start game with configured number of pieces', function () {
        var pieces,
            config = {
               numberOfPieces: 6
            };
        game.startGame(config);

        pieces = game.getPieces();

        expect(pieces.length).toBe(6);
    });

    it('should calculate number of pieces to guess when initial number is 4', function () {
        var amountToGuess;
        amountToGuess = game.calculateAmountToGuess(4);

        expect(amountToGuess).toBe(1);
    });

    it('should calculate number of pieces to guess when initial number is 10', function () {
        var amountToGuess;
        amountToGuess = game.calculateAmountToGuess(11);

        expect(amountToGuess).toBe(4);
    });

    it('should calculate number of pieces to guess when initial number is 25', function () {
        var amountToGuess;
        amountToGuess = game.calculateAmountToGuess(25);

        expect(amountToGuess).toBe(11);
    });



    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    }
});
