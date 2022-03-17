const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./videos.js");

app.use(cors());
app.use(express.json());

app.use("/videos", routes);

app.listen(8080, () => {
  console.log("server running on port 8080");
});
