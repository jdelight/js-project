define([
    'src/Component'
], function(
    Component
){
    'use strict';

    describe('Component', function () {
        it('Should be an object', function () {
            expect(Component).to.be.a('function');
        });
    });
});
