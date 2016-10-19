const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


const port = 8800;

const messages = [];

app.options("/", (req, res) => {
  res.status(200).set( {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
  .send();
})

app.get("/", (req, res) => {
  res.status(200).set( {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  })
  .send(JSON.stringify(messages.reverse()));
})

app.post("/", (req, res) => {
  //console.log(req.body);
  messages.push( {
    username: req.body.username,
    message: req.body.message,
    time: new Date()
  });
  res.status(200).set( {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  })
  .send(JSON.stringify(messages.reverse()));
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
