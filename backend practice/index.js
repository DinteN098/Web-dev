import express from "express";//backend web app framework
import bodyParser from "body-parser";//node.js body middleware
import { dirname } from "path";//Return the directory name of a path. Similar to the Unix dirname command.
import { fileURLToPath } from "url"; //ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string.
const __dirname = dirname(fileURLToPath(import.meta.url)) // dirname =Return the directory name of a path //ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string. 

const app = express(); //Creates an Express application
const port = 3000;

var bandname = '';//making the variable to edit it once we get info from user on the text boxes

app.use(bodyParser.urlencoded({extended: true}))//requests a middleware  before all the handler codes

app.get("/", (req, res) => { //home page
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bandNameGenerator) //custom middleware for out band name

app.listen(port, () => { //shows the port where our server is listening on the terminal
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req, res) => { //after the middleware makes sure that the user entered all the necessary info it will show the band name
  res.send(`<h1>Your band name is:</h1> <h2>${bandname}👁️‍🗨️</h2>`)
})

function bandNameGenerator(req, res, next){ //function that will make the band name
  bandname = `${req.body['street']}${req.body['pet']}`;
  next()
}