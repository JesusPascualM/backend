const router = require("express").Router();
const servicesManufacters = require("../services/servicesManufacters");

router.get("/", async (req, res) => {
  return await servicesManufacters.getAllManufacters(req, res);
});

router.get("/search", async (req, res) => {
  const { name } = req.query;

  if (name) 
    return await servicesManufacters.getManufactersByName(req, res);
});

module.exports = router;
