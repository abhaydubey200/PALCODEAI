const { DataTypes } = require("sequelize");
const db = require("../db");

const Collection = db.define("collection", {
  collection_name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Collection;
