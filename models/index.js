// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreginKey: 'category_id',
  onDelete: 'CASCADE', 
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Products.belongstoMany(Tags, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongstoMany(Products, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE', 
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
