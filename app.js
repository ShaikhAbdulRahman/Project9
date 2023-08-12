const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const doctorsModel = require("./model/doctorsModel")
const navsModel=require("./model/navsModel")
const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/hmsdb")
    .then(() => {
        console.log("DB is connected");
    })

app.get("/", (req, res) => {
    res.send("Connected to HMS App Api")
});
app.get("/navs",async(req,res)=>{
    const result=await navsModel.find({});
    res.send(result)
});
app.post("/addnav",async(req,res)=>{
    const payload=req.body;
    const newNav=new navsModel(payload);
    newNav.save()
    res.send("Added the Navigation")
})
app.get("/docs", async (req, res) => {
    const result = await doctorsModel.find({});
    res.send(result)
});
app.post("/adddoctor", async (req, res) => {
    const payload = req.body;
    const newDoctor = new doctorsModel(payload);
    newDoctor.save();
    res.send("Added the doctor")
});
app.post("deldoctor", async (req, res) => {
    const payload = req.body;
    await doctorsModel.findOneAndDelete(payload);
    res.send("Deleted the Doctor")
});
app.listen(1010, () => {
    console.log("Server is running on 1010...");
})