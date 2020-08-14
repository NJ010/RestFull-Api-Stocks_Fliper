const express = require("express");
const router = express.Router();
// Model
const stocks = require("../models/stocks");

// router.get("/Reliance",(req,res,next)=>{
//     res.status(202).json({
//         message:"Reliance",
//     });
// });


router.get("/date/:d", (req, res, next) => {
    const date = req.params.d;
    stocks.find({
        Date: date
    }, (err, foundStocks) => {
        res.status(200).json(foundStocks);
    });
});

router.get("/:name", (req, res, next) => {
    const name=req.params.name;
    stocks.find({name : name}, (err, foundStocks) => {
        res.status(200).json(foundStocks);
    });
});


router.get("/:name/:date", (req, res, next) => {
    const name = req.params.name;
    const date =req.params.date;
    stocks.find({
        name: name,
        Date: date
    }, (err, foundStocks) => {
        res.status(200).json(foundStocks);
    });
});






// router.get("/Nifty", (req, res, next) => {
//     res.status(202).json({
//         message: "Nifty",
//     });
// });



// router.get("/Tatasteel", (req, res, next) => {
//     res.status(202).json({
//         message: "Tatasteel",
//     });
// });



// router.get("/Cipla", (req, res, next) => {
//     res.status(202).json({
//         message: "Cipla",
//     });
// });


// router.get("/Eichermot", (req, res, next) => {
//     res.status(202).json({
//         message: "Eichermot",
//     });
// });


// router.get("/Ashokley", (req, res, next) => {
//     res.status(202).json({
//         message: "Ashokley",
//     });
// });

module.exports=router;