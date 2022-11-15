const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const productSchema = new Schema({
  name: String,
  price: Number,
  relevancia: Number,
  manufacter: {
    _id: { type: Schema.Types.ObjectId, ref: "Manufacter" },
  },
});

productSchema.plugin(mongoosePaginate);

const Product = model("Product", productSchema);

module.exports = Product;
