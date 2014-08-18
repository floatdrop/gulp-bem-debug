/* global it */

var debug = require('..');
require('should');

it('should return Stream', function () {
    debug().should.have.property('pipe').and.be.instanceOf(Function);
});
