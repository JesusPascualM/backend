const Manufacters = require("../models/modelManufacters");

const getAllManufacters = async (req, res) => {
  try {
    const data = await Manufacters.find({}).exec();
    res.json(data).status(200).end;
  } catch (err) {
    console.log(err);
    res.json({ res: "result not found" }).status(404).end();
  }
};

const getManufactersByName = async (req, res) => {
  const name = req.query.name.toUpperCase();
  try {
    const data = await Manufacters.find({ name: name }).exec();
    res.json(data).status(200).end;
  } catch (err) {
    console.log(err);
    res.json({ res: "result not found" }).status(404).end();
  }
};

module.exports = { getAllManufacters, getManufactersByName };
