const express =require("express");
const app=express();
const mongoose =require("mongoose");
// routes
const stockRoutes = require("./api/routes/stocks");

app.use('/stocks', stockRoutes);

// Connect To DataBase
mongoose.connect("mongodb+srv://FriendsBlog:1234@stocks.5dzhq.gcp.mongodb.net/Fliper?retryWrites=true&w=majority",{});

// error Handling
app.use((req,res,next) => {
    const err=new Error("NOT FOUND");
    err.status=404;
    next(err);
});

app.use((error,req, res, next) => {
    res.status(error.status || 500 );
    res.json({
        error:{
            message : error.message,
        }
    });
});

module.exports = app;