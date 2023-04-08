const express = require('express');
const router = new express.Router();
const User = require("../models/user")


//adding a new student using async await
router.post('/users', async(req,res)=>{
    try{
        const user = new User(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);
    }catch(e){
        res.status(400).send(e);
    }
})


router.get('/users', async(req,res)=>{
    try{
       const studentsdata = await User.find();
       res.send(studentsdata);
    }catch(e){
        res.send(e);
    }
})

router.get("/users/:id", async(req,res)=>{
    try{
        const requestid = req.params.id;
        //console.log(req.params.id);
        const studentdata = await User.findById(requestid);
        if(!studentdata){
            return res.status(404).send();
        }else{
            res.send(studentdata);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/users/:id",async(req,res)=>{
    try{
        const requestid = req.params.id;
        const deletestudent =  await User.findByIdAndDelete(requestid);
        if(!requestid){
            return res.status(404).send();
        }else{
            res.send(deletestudent);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

//updating data by id

router.patch("/users/:id", async(req,res)=>{
    try{
        const requestid = req.params.id;
        const updatetestudent =  await User.findByIdAndUpdate(requestid,req.body,{
            new:true
        });

        res.send(updatetestudent);

    }catch(e){
        res.status(404).send(e);
    }
})


module.exports = router;