const { EngagementPostProduct, EngagementPostProductMapping, EngagementPost } = require("../models");


exports.createProduct = async (req, res, next) => {
  try {
    const { name, image_url, sku } = req.body;

    if (!name || !image_url || !sku) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = await EngagementPostProduct.create({ name, image_url, sku });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};


exports.getTopProducts = async (req, res, next) => {
  try {
    const { tenant_id } = req.query;

    if (!tenant_id) {
      return res.status(400).json({ message: "Tenant ID is required" });
    }

    const topProducts = await EngagementPostProductMapping.findAll({
      include: [
        {
          model: EngagementPostProduct,
          attributes: ["name", "image_url"],
        },
        {
          model: EngagementPost,
          attributes: ["views"],
        },
      ],
      where: { tenant_id },
      order: [["views", "DESC"]],
      limit: 5,
    });

    res.status(200).json(topProducts);
  } catch (error) {
    next(error);
  }
};
