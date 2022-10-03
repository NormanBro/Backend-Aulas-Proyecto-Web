const app= require('./setting/index');

const puerto=process.env.PORT || app.get("PORT");

app.listen(puerto,()=>{
    console.log("localhost:"+puerto);
})