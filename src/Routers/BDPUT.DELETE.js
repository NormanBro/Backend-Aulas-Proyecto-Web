const {Router}=require('express');

const {API}=require('../setting/Config')
const Con=require('../DataBase/DataBase');

const router=Router();

//Usuario
router.put(API+'DELETE/User/:id',(req,res)=>{
    const QUERRY="UPDATE `tb_usuarios` SET `Estado` = 'desactivo' WHERE (`ID_Usuario` = '"+req.params.id+"');";

    Con.query(QUERRY,(err,row,fields)=>{
        Con.query(QUERRY,(err,row,fields)=>{
            let Menssage={"Message":"Se ha Eliminado sin problemas"}
            if(err){
                Menssage={"Message":"Ha ocurrido un error"};
            }
            return res.json(Menssage);
        });
    });
});

//Examen
router.put(API+'DELETE/Examen/:id',(req,res)=>{
    const QUERRY="UPDATE `tb_examen` SET `Estado` = 'desactivo' WHERE (`ID_Examen` = '"+req.params.id+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        Con.query(QUERRY,(err,row,fields)=>{
            let Menssage={"Message":"Se ha Eliminado sin problemas"}
            if(err){
                Menssage={"Message":"Ha ocurrido un error"};
            }
            return res.json(Menssage);
        });
    });
});

//Preguntas
router.delete(API+'DELETE/Preguntas/:id',(req,res)=>{
    
    let QUERRY="DELETE FROM `tb_respuesta` WHERE (`ID_Pregunta` = '"+req.params.id+"');";
    Con.query(QUERRY,(err,row,fields)=>{});

    QUERRY="DELETE FROM `tb_preguntas` WHERE (`ID_Pregunta` = '"+req.params.id+"');";
   
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Eliminado sin problemas"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
    
});

//Respuesta
router.delete(API+'DELETE/Respuesta/:id',(req,res)=>{
    const QUERRY="DELETE FROM `tb_respuesta` WHERE (`ID_Respuesta` = '"+req.params.id+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Eliminado sin problemas"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });

});

//Notificaciones
router.delete(API+'DELETE/Notificacion/:id',(req,res)=>{
    const QUERRY="UPDATE `tb_notificaciones` SET `Visto` = 'f' WHERE (`ID_Notificaciones` = '"+req.params.id+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Menssage={"Message":"Se ha Eliminado sin problemas"}
        if(err){
            Menssage={"Message":"Ha ocurrido un error"};
        }
        return res.json(Menssage);
    });
});
module.exports=router;