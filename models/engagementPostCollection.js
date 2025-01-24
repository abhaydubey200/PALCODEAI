const { DataTypes } = require("sequelize");
const db = require("../db");

const EngagementPostCollection = db.define("engagement_post_collection", {
  collection_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "collections", // Matches table name for Collection
      key: "id",
    },
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "engagement_posts", 
      key: "id",
    },
  },
  duration_in_seconds: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = EngagementPostCollection;
