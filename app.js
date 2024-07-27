const mongoose = require ('mongoose')
mongoose.connect("mongodb://localhost:27017/API")
const express = require('express')
const StudentModel = require('./Student')
const app = express()
const cors=require('cors')
const bodyparser = require('body-parser')

app.use(bodyparser.json())

app.use(cors())



app.get('/',(req,res)=>{
    res.send("hello")
})

app.post("/create",async(req,res)=>{
   
    try{
        const object = new StudentModel(req.body)        
        await object.save()
        res.status(201).send(object)

    }catch(err)
    {
        console.log(err)
    }
})


app.get("/list",async(req,res)=>{
    try{
        const info = await StudentModel.find();
        res.send(info)

    }catch(err)
    {
        console.log(err)
    }
})

app.get("/student/:id",async(req,res)=>{
    try{
        const student = await StudentModel.findById(req.params.id)
        res.send(student)

    }catch(err)
    {
        res.status(404).send({message:"student not found"})
    }
})


app.delete("/delete/:id",async(req,res)=>{
   try{
    const student = await StudentModel.findByIdAndDelete(req.params.id)
     res.send("deleted")
   }catch(err)
   {
    res.status(404).send({message:"student not found"})
   }
})

app.put("/student/:id",async(req,res)=>{
    try{
        const student = await StudentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send("updated")
    }
    catch(err)
    {
        res.status(404).send({message:"record not updated"})
    }
})


app.listen(3030,()=>{
    console.log("Server is running at port number 3030")
})



