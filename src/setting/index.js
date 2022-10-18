const express=require('express');
const app=express();

app.set("PORT",3000);
//midleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//router
app.use(require('../Routers/BDGET'));
app.use(require('../Routers/BDPOST'));
app.use(require('../Routers/BDPUT'));
app.use(require('../Routers/BDPUT.DELETE'))
module.exports=app;