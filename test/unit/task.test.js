'use strict';

var expect = require('expect.js');

describe('models/task', function() {
    before(function() {
        return require('../../models').sequelize.sync();
    });

    beforeEach(function() {
        this.User = require('../../models').User;
    });

    describe('create', function() {
        it('creates a task', function() {
            return this.User.create({
                username: 'johndoe'
            }).bind(this).then(function(user) {
                expect(user.username).to.equal('a username');
            });
        });
    });
});