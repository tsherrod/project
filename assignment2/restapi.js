const express = require("express");
const app = express();
const data = require('/path/to/data.json');

//Get a review
app.get('/:reviewid', function(req, res){
    res.json(data);
});

//Get random reviews by stars
app.get('/:n/:stars', function(req, res){
    res.json(data);
});

//Get random reviews by dat
app.get('/:n/:from_date/:to_date', function(res, req){
    res.json(data);
});

//Add a review
app.post('/:reviewid', function(req, res) {
    res.json(data);
});

//Update a review
app.put('/:reviewid', function(req, res){
    res.json(data);
});

//Delete a review
app.delete('/:reviewid', function(req, res){
    res.json(data);
});