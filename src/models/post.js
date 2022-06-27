'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {};
    Post.init({
        id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING(60), allowNull: false, defaultValue: '' },
        cost: { type: DataTypes.DECIMAL(5, 2), allowNull: false, defaultValue: 0 },
        description: { type: DataTypes.TEXT, allowNull: false, defaultValue: '' }
    }, { sequelize, modelName: 'Post', tableName: 'post', timestamps: true });
    return Post;
};
