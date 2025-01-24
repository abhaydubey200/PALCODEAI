const { EngagementPost, EngagementPostContent } = require("../models");

exports.getPosts = async (req, res, next) => {
  try {
    const { tenant_id } = req.query;
    const posts = await EngagementPost.findAll({
      where: { tenant_id },
      include: EngagementPostContent,
    });
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};
