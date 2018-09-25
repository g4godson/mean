


const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require("body-parser");



app.use(bodyParser.json());
app.use(express.static( __dirname + "/public/dist/public"));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'));
});

var serverListen = 8000


app.listen(serverListen, function(){
    console.log(`Listening on ${serverListen}.`);
});