const { DataTypes } = require("sequelize");
const db = require("../db");

const EngagementPostProductMapping = db.define("engagement_post_product_mapping", {
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "engagement_posts", 
      key: "id",
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "engagement_post_products", 
      key: "id",
    },
  },
});

module.exports = EngagementPostProductMapping;
