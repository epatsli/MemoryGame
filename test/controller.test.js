describe('Controller', function () {

    it('should start new game', function () {

        //given
        var pieces = [];
        spyOn(view, 'getInitialNumberOfPieces').and.returnValue(4);
        spyOn(game, 'startGame');
        spyOn(game, 'getPieces').and.returnValue(pieces);
        spyOn(view, 'giveNewParty');
        spyOn(view, 'renderPieces');
        spyOn(view, 'highlight');
        spyOn(view, 'turnOffHighlight');

        //when
        controller.startGame();

        //then
        expect(view.getInitialNumberOfPieces());
        expect(game.startGame).toHaveBeenCalled();
        expect(game.getPieces).toHaveBeenCalled();
        expect(view.giveNewParty).toHaveBeenCalled();
        expect(view.renderPieces).toHaveBeenCalledWith(pieces);
        expect(view.highlight).toHaveBeenCalled();
        expect(view.turnOffHighlight).toHaveBeenCalled();
    });
});