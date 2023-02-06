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
})

// http://localhost:3000/exercise
router.get("/:id", (req,res,next)=>{
    const id = req.params.id
    res.status(200).json({
        message: 'Successful - GET',
        id: id,
        metadata:{
            hostname: req.hostname,
            method: req.method,
        }    
    })
})

// patch
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
// post
router.get("/post", (req,res)=>{
    res.status(200).json({
        message: "Using Post status 201",
    });
});
// delete
router.get("/delete/:id", (req,res)=>{
    const id = req.params.id;
    res.status(200).json({
        message: `deleted user ${id}`,
    });
});

module.exports = router;