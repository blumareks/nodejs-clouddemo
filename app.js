const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser()); // Automatically parses form data
//app.use(express.static(__dirname)); // serve your css as static

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  console.log(__dirname + "/index.html"); //shows in console where are you files
  res.sendFile(__dirname + "/index.html"); //serves the index.html file
});

app.post("/send", (req, res) => {
  // res.send("Thank you for posting"); //step one - say hello to post
  // respond with query
  //call the backend API with req.query.query
  //await for the response from API <2sec
  //provide the output here 
 
  console.log(req.body); //what parameters are in the query
  res.send('query: ' + req.body.query);

});