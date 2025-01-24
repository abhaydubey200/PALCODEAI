const { DataTypes } = require("sequelize");
const db = require("../db");

const EngagementPost = db.define("engagement_post", {
  title: { type: DataTypes.STRING, allowNull: false },
  tenant_id: { type: DataTypes.INTEGER, allowNull: false },
  views: { type: DataTypes.INTEGER, defaultValue: 0 },
});

module.exports = EngagementPost;
