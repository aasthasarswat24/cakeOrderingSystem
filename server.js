const express= require('express');
const app=express();
const ejs =require('ejs');
const path=require('path');
const expressLayout =require("express-ejs-layouts"); 
var favicon = require('serve-favicon')

const PORT=process.env.PORT||9000;

//assets
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render("home");
}); 
//favicon
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
//set Template Engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views/"));


app.set('view engine', 'ejs'); 


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});