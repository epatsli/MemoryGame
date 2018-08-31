describe('Game', function () {
    it('should have 4 pieces after game start', function () {

        //given
        var pieces;

        //when
        game.startGame();
        pieces = game.getPieces();

        //then
        expect(pieces.length).toBe(4);
    });

    it('one pieces should be to guess after game start', function () {

        //given
        var piecesToGuess;
        game.startGame();

        //when
        piecesToGuess = findPiecesToGuess(game.getPieces());

        //then
        expect(piecesToGuess.length).toBe(1);
    });

    it('should start game with configured number of pieces', function () {

        //given
        var pieces,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);

        //when
        pieces = game.getPieces();

        //then
        expect(pieces.length).toBe(6);
    });

    it('should calculate number of pieces to guess when initial number is 4', function () {

        //given
        var amountToGuess;

        //when
        amountToGuess = game.calculateAmountToGuess(4);

        //then
        expect(amountToGuess).toBe(1);
    });

    it('should calculate number of pieces to guess when initial number is 10', function () {

        //given
        var amountToGuess;

        //when
        amountToGuess = game.calculateAmountToGuess(11);

        //then
        expect(amountToGuess).toBe(4);
    });

    it('should calculate number of pieces to guess when initial number is 25', function () {

        //give
        var amountToGuess;

        //when
        amountToGuess = game.calculateAmountToGuess(25);

        //then
        expect(amountToGuess).toBe(11);
    });

    it('should start game with configured number of pieces', function () {

        //given
        var pieces,
            config = {
                numberOfPieces: 11
            };
        game.startGame(config);

        //when
        pieces = game.getPieces();

        //then
        expect(pieces.length).toBe(11);
    });

    it('should return true when guess pieces', function () {

        //given
        var pieces,
            piecesToGuess = [],
            i;
        game.startGame();

        //when
        pieces = game.getPieces();

        for (i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                piecesToGuess.push(i);
            }
        }

        //then
        for (i = 0; i < piecesToGuess.length; i++) {
            expect(game.checkClickedPiece(piecesToGuess[i])).toBe(true);
        }
    });

    it('should cannot guess same piece twice', function () {

        //given
        var pieces,
            indexOfPiecesToGuess,
            i;
        game.startGame();

        //when
        pieces = game.getPieces();

        for (i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                indexOfPiecesToGuess = i;
                break;
            }
        }

        //then
        expect(game.checkClickedPiece(indexOfPiecesToGuess)).toBe(true);
        expect(game.checkClickedPiece(indexOfPiecesToGuess)).toBe(false);
    });

    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    }
});
