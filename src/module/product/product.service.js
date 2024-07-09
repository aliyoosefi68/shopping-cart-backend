const autoBind = require("auto-bind");
const ProductModel = require("./Product.model");
const CategoryModel = require("../category/category.model");
const createHttpError = require("http-errors");
const { default: slugify } = require("slugify");

class ProductService {
  #model;
  #categoryModel;
  constructor() {
    autoBind(this);
    this.#model = ProductModel;
    this.#categoryModel = CategoryModel;
  }

  //create new product
  async create(ProductDto) {
    console.log(ProductDto);
    const category = await this.checkCategoryExistById(ProductDto.category);
    ProductDto.category = category._id;
    ProductDto.slug = slugify(ProductDto.slug, {
      trim: true,
      replacement: "_",
      lower: true,
    });
    await this.alreadyExistByCategoryAndSlug(ProductDto.slug, category._id);
    const product = await this.#model.create(ProductDto);
    return product;
  }

  //get all products
  async find() {
    const products = await this.#model.find({});
    return products;
  }
  async findById(id) {
    const product = await this.#model.findById(id);
    return product;
  }
  async update() {}
  async remove(id) {
    await this.#model.deleteOne({ _id: id });
  }

  //check exist
  async checkCategoryExistById(id) {
    const category = await this.#categoryModel.findById(id);
    if (!category) throw new createHttpError.NotFound("category not found");
    return category;
  }

  //already exist this product in category
  async alreadyExistByCategoryAndSlug(slug, category) {
    const isExist = await this.#model.findOne({ category, slug });
    if (isExist) throw new createHttpError.Conflict("Already exist");
    return null;
  }
}

module.exports = new ProductService();
