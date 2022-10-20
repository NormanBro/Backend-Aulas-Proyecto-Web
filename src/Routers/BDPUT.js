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

//Aulas
router.put(API+'PUT/Aulas/:id',(req,res)=>{
    let QUERRY="UPDATE `tb_aula` SET `Nombre_Aula` = '"+req.body.name+"' WHERE (`ID_Aula` = '"+req.params.id+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
});

//Salas
router.put(API+'PUT/Salas/:id',(req,res)=>{
    const QUERRY="UPDATE `tb_sala` SET `Nombre_Sala` = '"+req.body.name+"' WHERE (`ID_Sala` = '"+req.params.id+"');"
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });

});

//Examen
router.put(API+'PUT/Examen/:id',(req,res)=>{
    const QUERRY="UPDATE `tb_examen` SET `NombreExamen` = '"+req.body.name+"' WHERE (`ID_Examen` = '"+req.params.id+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
});

//Preguntas
router.put(API+'PUT/Preguntas/:id',(req,res)=>{
    const QUERRY="UPDATE `tb_preguntas` SET `Pregunta` = '"+req.body.name+"' WHERE (`ID_Pregunta` = '"+req.params.id+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
});

//Respuestas
router.put(API+'PUT/Respuesta/:id',(req,res)=>{
    const QUERRY="UPDATE `tb_respuesta` SET `Respuesta` = '"+req.body.resp+"' WHERE (`ID_Respuesta` = '"+req.params.id+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
});

//Tarea
router.put(API+'PUT/Tarea/:id',(req,res)=>{
    let QUERRY="UPDATE `tb_tarea` SET `Nombre_Tarea` = '"+req.body.name+"', `Descripcion` = '"+req.body.descripcion+"', `Archivos` = '"+req.body.arch+"' WHERE (`ID_Tarea` = '"+req.params.id+"');"
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
})

router.put(API+'PUT/Tarearespo/:id',(req,res)=>{
    let QUERRY="UPDATE `tb_tarea_resp` SET `Archivos` = '"+req.body.arch+"' WHERE (`ID_TResp` = '"+req.params.id+"');"
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Cambiado los datos"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
})

module.exports=router;