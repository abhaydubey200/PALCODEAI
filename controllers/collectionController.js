const { Collection, EngagementPostCollection } = require("../models");

// Create a new collection
exports.createCollection = async (req, res, next) => {
  try {
    const { collection_name } = req.body;

    if (!collection_name) {
      return res.status(400).json({ message: "Collection name is required" });
    }

    const newCollection = await Collection.create({ collection_name });
    res.status(201).json(newCollection);
  } catch (error) {
    next(error);
  }
};

// Add posts to a collection
exports.addPostToCollection = async (req, res, next) => {
  try {
    const { collection_id } = req.params;
    const { post_id, duration_in_seconds } = req.body;

    if (!collection_id || !post_id || !duration_in_seconds) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const postCollection = await EngagementPostCollection.create({
      collection_id,
      post_id,
      duration_in_seconds,
    });

    res.status(201).json(postCollection);
  } catch (error) {
    next(error);
  }
};
