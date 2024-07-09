const express = require("express");
const dotenv = require("dotenv");
const SwaggerConfig = require("./src/config/swagger.config");
const cookieParser = require("cookie-parser");
const mainRouter = require("./src/app.routes");
const NotFoundHandler = require("./src/common/exeption/not-found.handler");
const AllExceptionHandler = require("./src/common/exeption/all-exception.handller");

dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;
  require("./src/config/mongoose.config");
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
  //static files
  app.use(express.static("public"));

  //app routes
  app.use(mainRouter);

  //swager
  SwaggerConfig(app);
  NotFoundHandler(app);
  AllExceptionHandler(app);

  app.listen(port, () => {
    console.log(`server run on => http://localhost:${port}`);
  });
}

main();
