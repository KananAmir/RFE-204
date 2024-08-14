const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const DB_PATH = "./db.json";
const db = require(DB_PATH);

console.log(db);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", (req, res) => {
  res.send(`<h2>lorem ipsum dolor</h2>`);
});

app.get("/message", (req, res) => {
  res.json({ message: "hello world!" });
});

//get all products
app.get("/products", (req, res) => {
  if (db.products.length > 0) {
    res.status(200).send(db.products);
  } else {
    res.send({ message: "data is empty!" }).status(204);
  }
});

//get product by id
app.get("/products/:id", (req, res) => {
  //   const id = req.params.id;
  const { id } = req.params;

  const product = db.products.find((item) => item.id === id);
  console.log(product);

  if (product !== undefined) {
    res.send(product).status(200);
  } else {
    res.send({ message: "not found!" }).status(404);
  }
});

//delete product by id
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const idx = db.products.findIndex((item) => item.id === id);

  if (idx === -1) {
    res.status(404).send({ message: "failed to delete, no such product!" });
  } else {
    const deletedProduct = db.products.splice(idx, 1);
    fs.writeFileSync(DB_PATH, JSON.stringify(db));
    res.status(200).send({
      message: "deleted succesfully!",
      data: deletedProduct,
    });
  }
});

//post new product
app.post("/products", (req, res) => {
  const product = {
    id: uuid.v4(),
    ...req.body,
  };

  db.products.push(product);
  fs.writeFileSync(DB_PATH, JSON.stringify(db));

  res.status(201).send({
    message: "created succesfully!",
    data: product,
  });
});

// update data, put

app.put("/products/:id", (req, res) => {
  const { id } = req.params;

  const idx = db.products.findIndex((item) => item.id === id);

  const product = {
    id,
    ...req.body,
  };

  db.products[idx] = product;

  fs.writeFileSync(DB_PATH, JSON.stringify(db));

  res.status(200).send({
    message: "succesfully updated!",
    data: product,
  });
});

// update data, patch

app.patch("/products/:id", (req, res) => {
  const { id } = req.params;

  const idx = db.products.findIndex((item) => item.id === id);

  db.products[idx] = {
    ...db.products[idx],
    ...req.body,
  };

  fs.writeFileSync(DB_PATH, JSON.stringify(db));

  res.status(200).send({
    message: "updated succesfully!",
    data: db.products[idx],
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
