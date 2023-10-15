import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(require("./routes.ts"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
