const router = require("express").Router();
const servicesProducts = require("../services/servicesProducts");

router.get("/manufacter", async (req, res) => {
  // pasamos el id del producto
  const { id } = req.query;
  let docs = [];
  docs = await servicesProducts.getManufacter(id);

  if (docs !== 0) res.json({ products: docs }).status(200).end();
  else res.json({ result: "No existen resultados" }).status(404).end();
});

router.get("/search", async (req, res) => {
  const { name, relevancia, price, page } = req.query;
  let docs = [];

  if (name && relevancia && price) {
    docs = await servicesProducts.getProductsBrandRelevancePrice(
      name,
      relevancia,
      price,
      page
    );
  } else if (name && relevancia) {
    docs = await servicesProducts.getProductsBrandRelevance(name, relevancia, page);
  } else if (name && price) {
    docs = await servicesProducts.getProductsBrandPrice(name, price, page);
  } else if (relevancia && price) {
    docs = await servicesProducts.getProductsRelevancePrice(relevancia, price, page);
  } else if (relevancia) {
    docs = await servicesProducts.getProductsRelevance(relevancia, page);
  } else if (name) {
    docs = await servicesProducts.getProductsBrand(name, page);
  } else if (price) {
    docs = await servicesProducts.getProductsPrice(price, page);
  } else {
    docs = await servicesProducts.getAllProducts(page);
  }

  if (docs.totalDocs !== 0) {
    const { page, totalPages } = docs;
    docs = docs.docs.map((elem) => {
      const { _id, name, relevancia, price } = elem;
      return { _id, name, relevancia, price };
    });
    res.json({ page, totalPages, products: docs }).status(200).end();
  } else {
    res.json({ result: "No existen resultados" }).status(404).end();
  }
});

module.exports = router;
