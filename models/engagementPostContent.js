const { DataTypes } = require("sequelize");
const db = require("../db");

const EngagementPostContent = db.define("engagement_post_content", {
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "engagement_posts", 
      key: "id",
    },
  },
  content_url: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = EngagementPostContent;
