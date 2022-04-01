# nodejs-clouddemo
This is a simple demo of a form hosted on node.js, and pulling data from API all in IBM Cloud.

that is doing this by calling the Node.js function.
https://stackoverflow.com/questions/8624093/node-js-submit-form
also adding bodyparser (no longer included in plain node express server);
https://www.npmjs.com/package/body-parser

The html uses a simple form:

```html
The simple input text form with a button "send"
the form:
<form action="/send" method="post">query: <input type="text" name="query" id="query" /><input type="submit" value="Submit" id="button" />
</form>
```

The initial portion of the node server app:

```js
The server portion of a webserver:
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
```

In order to create the example run the following commands (in terminal on MacOS monterey):
```bash
$ brew install node
```

start here if you have node installed
```bash
$ node -v
v17.8.0
$ npm -v
8.5.5

$ npm init -y
Wrote to [some-file-system-folder]/package.json:

{
  "name": "web-server-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


$ npm install express
$ npm install body-parser 

```

Now you can run the app: 

```bash
$ node app
```

Check the browser at: http://localhost:3000

fillout the form - and click submit button


