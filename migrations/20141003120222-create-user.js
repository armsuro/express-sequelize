"use strict";

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface
            .createTable('Users', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                username: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                email: Sequelize.STRING,
                username: Sequelize.STRING,
                name: Sequelize.STRING,
                password: Sequelize.STRING,
                company_id: Sequelize.INTEGER,
                role: Sequelize.INTEGER,
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            });
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface
            .dropTable('Users');
    }
};