const { DataTypes } = require("sequelize");
const db = require("../db");

const EngagementPostProduct = db.define("engagement_post_product", {
  name: { type: DataTypes.STRING, allowNull: false },
  image_url: { type: DataTypes.TEXT, allowNull: false },
  sku: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = EngagementPostProduct;
