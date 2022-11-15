const Products = require("../models/modelProducts");

const getManufacter = async (id) => {
  const product = await Products.findById(id).populate("manufacter._id").exec();
  return {
    ...product._doc,
    manufacter: {
      ...product.manufacter._id._doc,
    },
  };
};

const escapeRegex = (text) => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const getAllProducts = async (page) => {
  return await Products.paginate(
    {},
    { page, sort: { ["price"]: 1 }, limit: 10 }
  );
};

const getProductsBrandRelevancePrice = async (brand, relevancia, price, page) => {
  const regex = new RegExp(escapeRegex(brand), "gi");
  return await Products.paginate(
    {
      $and: [{ name: regex }, { relevancia: relevancia }, { price: { $lt: price } }],
    },
    { page, sort: { ["price"]: 1 }, limit: 10 }
  );
};

const getProductsBrandRelevance = async (brand, relevancia, page) => {
  const regex = new RegExp(escapeRegex(brand), "gi");
  return await Products.paginate(
    {
      $and: [{ name: regex }, { relevancia: relevancia }],
    },
    { page, sort: { ["price"]: 1 }, limit: 10 }
  );
};

const getProductsBrandPrice = async (brand, price, page) => {
  const regex = new RegExp(escapeRegex(brand), "gi");
  return await Products.paginate(
    {
      $and: [{ name: regex }, { price: { $lt: price } }],
    },
    { page, sort: { ["price"]: 1 }, limit: 10 }
  );
};

const getProductsRelevancePrice = async (relevancia, price, page) => {
  return await Products.paginate(
    {
      $and: [{ relevancia: relevancia }, { price: { $lt: price } }],
    },
    { page, sort: { ["price"]: 1 }, limit: 10 }
  );
};

const getProductsRelevance = async (relevancia, page) => {
  return await Products.paginate(
    {
      relevancia: relevancia,
    },
    { page, sort: { ["price"]: 1 }, limit: 10 }
  );
};

const getProductsBrand = async (brand, page) => {
  const regex = new RegExp(escapeRegex(brand), "gi");
  return await Products.paginate(
    { name: regex },
    { page, sort: { ["price"]: 1 }, limit: 10 }
  );
};

const getProductsPrice = async (price, page) => {
  return await Products.paginate(
    { price: { $lt: price } },
    { page, sort: { ["price"]: 1 }, limit: 10 }
  );
};

module.exports = {
  getAllProducts,
  getProductsBrandRelevancePrice,
  getProductsBrandRelevance,
  getProductsBrandPrice,
  getProductsRelevancePrice,
  getProductsRelevance,
  getProductsBrand,
  getProductsPrice,
  getManufacter,
};
