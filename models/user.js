"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        company_id: DataTypes.INTEGER,
        role: DataTypes.INTEGER,
        createdAt: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return User;
};