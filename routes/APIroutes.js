var router = require("express").Router();
var DB = require("../models");

router.get("/api/books",function(req,res){
    DB.find()
    .then(records => {
        console.log("Get route",records)
        res.json(records)
    })
});
router.post("/api/books",function(req,res){
    DB.create(req.body)
    .then(records => {
        console.log("Post route",records)
        res.json(records)
    })
});
router.put("/api/books/:id",function(req,res){
    DB.findByIdAndUpdate(req.params.id, req.body)
    .then(records => {
        console.log("Put route",records)
        res.json(records)
    })
});
router.delete("/api/books/:id",function(req,res){
    DB.findByIdAndDelete(req.params.id)
    .then(records => {
        console.log("Delete route",records)
        res.json(records)
    })
});
router.get("/api/books/:id",function(req,res){
    DB.findById(req.params.id)
    .then(records => {
        console.log("Get route",records)
        res.json(records)
    })
});

module.exports = router;