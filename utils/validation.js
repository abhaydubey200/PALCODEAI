const Joi = require("joi");

exports.validatePost = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    tenant_id: Joi.number().required(),
  });
  return schema.validate(data);
};
