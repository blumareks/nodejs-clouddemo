const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser()); // Automatically parses form data
var request = require('request');
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
  console.log(req.body); //what parameters are in the query
  //res.send('query: ' + req.body.query);

  
  //call the backend API with req.query.query

  var exampleJson = {}; 
  var exampleResponse = {'query': req.body.query, 'result': exampleJson };
    
  //const query = params.query;
  //const bearerToken = params.token; // ... obtain bearer token value ...
    
    
  var options = {
      'method': 'POST',
      'url': 'https://some-api-link',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        "query": req.body.query
      })
    
  };

  let request_call = new Promise((resolve, reject) => {
        request(options, function (error, response) {
        if (error) reject(error);
        //console.log(response.body);
        resolve(response);
      });
      
  });
  
  //await for the response from API <2sec
  //provide the output here 
  // promise resolved or rejected asynchronously
  request_call.then((response) => {
    	console.log(response);
    	res.send( {message: response});
    }).catch((error) => {
    	console.log(error);
    	res.send( {message: exampleResponse} );
    });

});