const {Router}=require('express');

const {API}=require('../setting/Config')
const Con=require('../DataBase/DataBase');

const router=Router();

//Usuario
router.put(API+'PUT/Users/:id',(req,res)=>{

    const QUERRY="UPDATE `tb_usuarios` SET `Nombre` = '"+req.body.name+"', `ApellidoP` = '"+req.body.AP+"', `ApellidoM` = '"+req.body.AM+"', `Correo` = '"+req.body.correo+"', `username` = '"+req.body.username+"', `Contraseña` = '"+req.body.pass+"', `Tema` = '"+req.body.Tema+"' WHERE (`ID_Usuario` = '"+req.params.id+"');"

    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });

});

//Unidad
router.put(API+'PUT/Unidad/:id',(req,res)=>{
    const QUERRY="UPDATE `tb_unidad` SET `Nombre_Unidada` = '"+req.body.name+"' WHERE (`ID_Unidad` = '"+req.params.id+"');"
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
});

module.exports=router;