/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth Module and Routes
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 *          checkOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code
 *              properties:
 *                  mobile:
 *                      type: string
 *                  code:
 *                      type: string
 */

/**
 * @swagger
 * /auth/send-otp:
 *  post:
 *      summary: login with OTP
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/SendOTP"
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/SendOTP"
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * /auth/check-otp:
 *  post:
 *      summary: check OTP for login user
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: "#/components/schemas/checkOTP"
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/checkOTP"
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * /auth/logout:
 *  get:
 *      summary: logout of account
 *      tags:
 *          -   Auth
 *      responses:
 *          200:
 *              description: success
 */
