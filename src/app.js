const app= require('./setting/index');

const puerto=process.env.PORT || app.get("PORT");

app.get('/',(req,res)=>{
    return res.json({"Hola mundo":"Hola"})
})

app.listen(puerto,()=>{
    console.log("localhost:"+puerto);
})