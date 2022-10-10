const app= require('./setting/index');

const puerto=process.env.PORT || app.get("PORT");

app.get('/',(res,req)=>{
    return "Hola mundo";
})

app.listen(puerto,()=>{
    console.log("localhost:"+puerto);
})