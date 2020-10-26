const express = require('express');
var routerCustomer = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Customer} = require('../Models/customer');

// localhost : 3000/Jewellery
routerCustomer.get('/',(req,res)=>{
    Customer.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Retriving Customer: '+JSON.stringify(err,undefined,2));}

    });

});


routerCustomer.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Customer.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Retriving Customer : '+JSON.stringify(err,undefined,2));}
    });
});

routerCustomer.post('/',(req,res)=>{
    var customeremp = new Customer({
        name : req.body.name,
        date : req.body.date,
        contact: req.body.contact,
        phoneNumber : req.body.phoneNumber,
        address :req.body.address,
        total_price : req.body.total_price,
    });
    customeremp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Customer saving Data : '+JSON.stringify(err,undefined,2));}

    });
});

routerCustomer.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    var customeremp= new Customer({
        name : req.body.name,
        date : req.body.date,
        contact: req.body.contact,
        phoneNumber : req.body.phoneNumber,
        address :req.body.address,
        total_price : req.body.total_price,
    });
    Customer.findByIdAndUpdate(res.params.id,{$set:customeremp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Update Customer : '+JSON.stringify(err,undefined,2));}
    });

});


routerCustomer.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Customer.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete Customer : '+JSON.stringify(err,undefined,2));}
    });
});

module.exports = routerCustomer;