const mongooge =require("mongoose");

const Stocks=mongooge.Schema({
    name:String,
    Date: String,
    Open : Number,
    High: Number,
    Low: Number,
    Close: Number,
    Adjclose: Number,
    Volume: Number,

});

module.exports=mongooge.model("stocks",Stocks);