const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4040;

app.use(cors());
app.use(express.static(__dirname + "/"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});