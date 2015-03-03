describe ('This test checks things are working for a start up code kata', function(){

    var sut;

    beforeEach(module('codeKata'));

    beforeEach(inject(function (kataService) {
        sut = kataService;
    }));

    it('the service should be defined', function () {
        expect(sut).toBeDefined();
    });

    it('the service should be great', function () {
        expect(sut).toBeAwesome();
    });

    it('the service must define a test function', function () {
        expect(sut.test).toBeDefined();
    });
});