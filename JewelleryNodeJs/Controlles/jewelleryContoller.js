const express = require('express');
var routerJewellery = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Jewellery} = require('../Models/jewellery');

// localhost : 3000/Jewellery
routerJewellery.get('/',(req,res)=>{
    Jewellery.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Retriving Jewellery : '+JSON.stringify(err,undefined,2));}

    });

});


routerJewellery.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Jewellery.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Retriving jewellery : '+JSON.stringify(err,undefined,2));}
    });
});


routerJewellery.post('/',(req,res)=>{
    var Jewelleryemp = new Jewellery({
        name : req.body.name,
        type : req.body.type,
        size: req.body.size,
        color : req.body.color,
        price :req.body.price,
        
    });
    Jewelleryemp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Jewellery saving Data : '+JSON.stringify(err,undefined,2));}

    });
});



routerJewellery.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    var jewelleryemp= new Jewellery({
        name : req.body.name,
        type : req.body.type,
        size: req.body.size,
        color : req.body.color,
        price :req.body.price,
    });
    Jewellery.findByIdAndUpdate(res.params.id,{$set:jewelleryemp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Update Jewellery : '+JSON.stringify(err,undefined,2));}
    });

});


routerJewellery.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Jewellery.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete Jewellery : '+JSON.stringify(err,undefined,2));}
    });
});

module.exports = routerJewellery;