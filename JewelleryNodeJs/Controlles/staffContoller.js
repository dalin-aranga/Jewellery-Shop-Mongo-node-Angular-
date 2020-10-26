const express = require('express');
var routerStaff = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Staff} = require('../Models/staff');

// localhost : 3000/Jewellery
routerStaff.get('/',(req,res)=>{
    Staff.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Retriving Staff: '+JSON.stringify(err,undefined,2));}

    });

});


routerStaff.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Staff.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Retriving Staff: '+JSON.stringify(err,undefined,2));}
    });
});


routerStaff.post('/',(req,res)=>{
    var staffemp = new Staff({
        name : req.body.name,
        position : req.body.orderName,
        age: req.body.distric,
        contact : req.body.phoneNumber,
        address :req.body.address,
        
    });
    staffemp.save((err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Errore in Staff saving Data : '+JSON.stringify(err,undefined,2));}

    });
});


routerStaff.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    var staffemp = new Staff({
        name : req.body.name,
        type : req.body.type,
        size: req.body.size,
        color : req.body.color,
        price :req.body.price,
    });
    Staff.findByIdAndUpdate(res.params.id,{$set:staffemp},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Update Staff : '+JSON.stringify(err,undefined,2));}
    });

});

routerStaff.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given Id ');

    Staff.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Errore in Delete Staff : '+JSON.stringify(err,undefined,2));}
    });
});


module.exports = routerStaff;