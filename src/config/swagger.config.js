const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

function SwaggerConfig(app) {
  const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "cart-backend",
        description: "cart project",
        version: "1.0.0",
      },
    },
    apis: [process.cwd() + "/src/module/**/*.swagger.js"],
  });
  const swagger = swaggerUI.setup(swaggerDocument, {});
  app.use("/", swaggerUI.serve, swagger);
}

module.exports = SwaggerConfig;
