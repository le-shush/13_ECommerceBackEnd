const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: { // id column
      type: DataTypes.INTEGER, // Integer datatype
      allowNull: false, // Doesn't allow null values
      primaryKey: true, // Set as primary key
      autoIncrement: true // Uses auto increment
    },
    product_id: { // product_id column
      type: DataTypes.INTEGER, // Integer datatype
      references: { // References the product model
        model: 'product',
        key: 'id',
        unique: false
      }
    },
    tag_id: { // tag_id column
      type: DataTypes.INTEGER, // Integer datatype
      references: { // References the tag model
        model: 'tag',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
