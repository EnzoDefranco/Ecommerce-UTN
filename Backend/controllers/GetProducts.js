const Product = require("../model/Product");

const getProducts = async (req, res) => {
  const searchQuery = req.query.search || '';
  const products = await Product.find({ name: new RegExp(searchQuery, 'i') });

  if (products.length > 0) {
    res.json({ products });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getProducts;