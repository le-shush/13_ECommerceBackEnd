// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, // Integer datatype
      allowNull: false, // Doesn't allow null values
      primaryKey: true, // Set as primary key
      autoIncrement: true // Uses auto increment
    },
    product_name: {
      type: DataTypes.STRING, // String datatype
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL, // Decimal datatype
      allowNull: false,
      validate: {
        isDecimal: true // Checks for decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true, // Checks for numeric
      },
      defaultValue: 10, // Default value of 10
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // References the category model
        key: 'id', // References the id key
        unique: false, // Doesn't have to be unique
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
