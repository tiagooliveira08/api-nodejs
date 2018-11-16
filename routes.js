const express = require("express");
const routes = express.Router();

const productControllers = require("./controllers/productControllers");

routes.get("/products", productControllers.index);
routes.post("/products", productControllers.store);
routes.get("/products/:id", productControllers.show);
routes.put("/products/:id", productControllers.update);
routes.delete("/products/:id", productControllers.destroy);

module.exports = routes;