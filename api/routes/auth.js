import express from "express";

const router = express.Router();


router.get("/register",(req,res)=>{
    res.send("hello,this is register endpoint")
})



export default router