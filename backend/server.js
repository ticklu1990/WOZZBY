import express from "express";
import data from "./data";

const app = express();

//end point,path of this endpoint:
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
