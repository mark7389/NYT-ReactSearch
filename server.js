const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytarticles",
{
    useMongoClient:true
});

app.listen(PORT, function(){

    if(PORT === 3001){
        console.log("🌎 ==> listening on PORT: "+PORT);
    }
    else{
        console.log("running...");
    }
});
