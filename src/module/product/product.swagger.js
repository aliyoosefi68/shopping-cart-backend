/**
 * @swagger
 * tags:
 *  name: Product
 *  description: Product Module and Routes
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateProduct:
 *              type: object
 *              required:
 *                  -   name
 *                  -   price
 *                  -   slug
 *                  -   category
 *              properties:
 *                  name:
 *                      type: string
 *                  slug:
 *                      type: string
 *                  category:
 *                      type: string
 *                  price:
 *                      type: number
 *                  image:
 *                      type: string
 *                      format: binary
 */
/**
 * @swagger
 * /product:
 *  post:
 *      summary: create new product
 *      tags:
 *          -   Product
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          price:
 *                              type: number
 *                          slug:
 *                              type: string
 *                          category:
 *                              type: string
 *                          image:
 *                              type: string
 *                              format: binary
 *      responses:
 *          200:
 *              description: successfully
 */
/**
 * @swagger
 * /product:
 *  get:
 *      summary: get all products
 *      tags:
 *          -   Product
 *      responses:
 *          200:
 *              description: successfully
 */
/**
 * @swagger
 * /product/{id}:
 *  get:
 *      summary: get product by id
 *      tags:
 *          -   Product
 *      parameters:
 *          -   in: path
 *              name: id
 *      responses:
 *          200:
 *              description: successfully
 */
/**
 * @swagger
 * /product/{id}:
 *  delete:
 *      summary: delet product by id
 *      tags:
 *          -   Product
 *      parameters:
 *          -   in: path
 *              name: id
 *      responses:
 *          200:
 *              description: successfully
 */
