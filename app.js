require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const errorMiddleware = require("./middleware/errorMiddleware");

const postRoutes = require("./routes/postRoutes");
const productRoutes = require("./routes/productRoutes");
const collectionRoutes = require("./routes/collectionRoutes");

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.use("/api/posts", postRoutes);
app.use("/api/products", productRoutes);
app.use("/api/collections", collectionRoutes);


app.use(errorMiddleware);


db.authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
