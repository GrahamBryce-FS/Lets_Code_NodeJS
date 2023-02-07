const express = require("express");
const router = express.Router();

// http://localhost:3000/exercise
router.get("/", (req,res, next)=>{
res.status(200).json({
    message: 'Successful - GET',
    metadata: {
        hostname: req.hostname,
        method: req.method,
        },
    });
});

// http://localhost:3000/exercise/get/45
router.get("/get/:id", (req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message: 'Successful - GET',
        id: id,
        metadata:{
            hostname: req.hostname,
            method: req.method,
        },   
    });
});

// http://localhost:3000/exercise/patch/89
router.get("/patch/:id", (req,res)=>{
    const id = req.params.id;
    res.status(200).json({
        message: "Using patch",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});
// http://localhost:3000/exercise/post
router.get("/post", (req,res)=>{
    res.status(200).json({
        message: "Using Post",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});
// http://localhost:3000/exercise/delete/9
router.get("/delete/:id", (req,res)=>{
    const id = req.params.id;
    res.status(200).json({
        id: id,
        message: `deleted user ${id}`,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

module.exports = router;