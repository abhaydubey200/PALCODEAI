const express = require("express");
const { createCollection, addPostToCollection } = require("../controllers/collectionController");

const router = express.Router();


router.post("/", createCollection);


router.post("/:collection_id/posts", addPostToCollection);

module.exports = router;
