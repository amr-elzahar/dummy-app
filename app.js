const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello Amr!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
