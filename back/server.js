const app = require("express")();
// const axios = require("axios")

app.get("/", (req, res) => {
  res.send("Hello World! plop");
});

app.use('/', require('./router/index'));

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
