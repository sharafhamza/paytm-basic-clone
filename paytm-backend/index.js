const express = require("express");
const mainRouter = require("./routes/index");
const app = express();
const port = 3000;

app.use("/api/v1", mainRouter);

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}
main();
