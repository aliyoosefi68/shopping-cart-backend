/**
 * @swagger
 * tags:
 *  name: Cart
 *  description: Cart Module and Routes
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateCart:
 *              type: object
 *              required:
 *                  -   productId
 *                  -   quantity
 *              properties:
 *                  productId:
 *                      type: string
 *                  quantity:
 *                      type: number
 */
/**
 * @swagger
 * /cart/{userID}/add:
 *  post:
 *      summary: add item to cart
 *      tags:
 *          -   Cart
 *      parameters:
 *          -   in: path
 *              name: userID
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref:   '#/components/schemas/CreateCart'
 *              application/json:
 *                  schema:
 *                      $ref:   '#/components/schemas/CreateCart'
 *      responses:
 *          200:
 *              description: successfully
 */
/**
 * @swagger
 * /cart/{userID}/checkout:
 *  put:
 *      summary: pay and checkout cart
 *      tags:
 *          -   Cart
 *      parameters:
 *          -   in: path
 *              name: userID
 *      responses:
 *          200:
 *              description: successfully
 */
/**
 * @swagger
 * /cart/{userID}/all-carts:
 *  get:
 *      summary: add item to cart
 *      tags:
 *          -   Cart
 *      parameters:
 *          -   in: path
 *              name: userID
 *      responses:
 *          200:
 *              description: successfully
 */
/**
 * @swagger
 * /cart:
 *  get:
 *      summary: get all carts
 *      tags:
 *          -   Cart
 *      responses:
 *          200:
 *              description: successfully
 */
