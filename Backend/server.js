//Import libraries
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const mongoDB = require('mongoose');
const routes = require('./routes/routes');

//Start server
app.listen(3000,(err)=>{
    if(err){
        console.error(err);
        console.log(err);
    }else{
        console.log("Server running and listening");
    }
});

//Connect to MongoDB
mongoose.set("strictQuery",false);
mongoDB.connect("mongodb://127.0.0.1:27017/incident",{
    useNewUrlParser: true, useUnifiedTopology: true
}, function checkMongoDBConnection(err){
    if(err){
        console.error(err);
        console.log(err);
    }else{
        console.log("Connected Successfully to MongoDB");
    }
});

//use routes and json
app.use(express.json());
app.use(routes);