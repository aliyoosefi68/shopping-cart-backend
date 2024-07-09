const autoBind = require("auto-bind");
const productService = require("./product.service");
const { ProductMessage } = require("./product.message");

class ProductController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = productService;
  }

  //create new product
  async create(req, res, next) {
    try {
      console.log(req.file);
      const image = req?.file?.path?.slice(7);
      console.log(image);
      const { name, price, category, slug } = req.body;
      await this.#service.create({ name, price, category, slug, image });

      return res.json({
        message: ProductMessage.Created,
      });
    } catch (error) {
      next(error);
    }
  }

  //find all product
  async find(req, res, next) {
    try {
      const products = await this.#service.find();
      return res.json({
        products,
      });
    } catch (error) {
      next(error);
    }
  }

  //find product by id
  async findById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await this.#service.findById(id);
      return res.json({ product });
    } catch (error) {
      next(error);
    }
  }

  //update product detailes
  async update(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  //delete product
  async remove(req, res, next) {
    try {
      const { id } = req.params;
      await this.#service.remove(id);
      return res.json({
        message: "product delete success fully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
