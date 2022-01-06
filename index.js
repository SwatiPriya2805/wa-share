const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/button.js`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});
app.get("/button.js", (req, res) => {
  res.sendFile(`${__dirname}/button.js`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})