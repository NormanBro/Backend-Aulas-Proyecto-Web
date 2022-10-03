const {Router}=require('express');

const {API}=require('../setting/Config')
const Con=require('../DataBase/DataBase');

const {v4:uuid}=require('uuid')

const router=Router();
//POST Usuarios
router.post(API+'POST/Users',(req,res)=>{
    const IDUser=Math.random() * (100000 - 0) + 0;
    const IDRol=2;
    const Codigo=uuid();
    const QUERRY="INSERT INTO tb_usuarios (ID_Usuario, Nombre, ApellidoP, ApellidoM, Correo, username, Contraseña, Tema, ID_Rol, Codigo_Tutor) VALUES ('"+Math.round(IDUser)+"', '"+req.body.name+"', '"+req.body.AP+"', '"+req.body.AM+"', '"+req.body.correo+"', '"+req.body.user+"', '"+req.body.pass+"', 'Default', '"+IDRol+"', '"+Codigo+"');"
    
    Con.query(QUERRY,(err,row,field)=>{
        let Message={"Menssage":"Se ha registrado Correctamente"}
        if(err){
            Message={"Menssage":"No se pudo registrar el usuario"}
            console.log(err);
        }
        return res.json(Message);
    })
    //return req.body;
});
//POST Salas
router.post(API+'POST/Salas',(req,res)=>{
    const ID_SALA=Math.random() * (100000 - 0) + 0;
    let QUERRY="INSERT INTO `school`.`tb_sala` (`ID_Sala`, `Nombre_Sala`) VALUES ('"+Math.round(ID_SALA)+"', '"+req.body.Nombre+"');"
    Con.query(QUERRY,(err,row,fields)=>{
        let message={"Message":"Se ha registrado Correctamente"};
        if(err){
            message={"Message":"No se ha Registrado"};
            console.log(err);
            return res.json(message);
        }
        res.json(message);
    });
});
//POST Notificacion
router.post(API+'POST/Notif',(req,res)=>{
    const ID_Noti=Math.random() * (100000 - 0) + 0;
    const QUERRY="INSERT INTO `school`.`tb_notificaciones` (`ID_Notificaciones`, `ID_Usuario`, `Visto`, `Mensaje`, `Fecha`, `Hora`) VALUES ('"+Math.round(ID_Noti)+"', '"+req.body.iduser+"', 'T', '"+req.body.message+"', '"+req.body.date+"', '"+req.body.time+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Enviado la notificacion"}
        if(err){
            Message={"Message":"No se ha Enviado"}
            return res.json(Message);
        }
        return res.json(Message);
    });
});
//POST CHAT
router.post(API+'POST/Chat',(req,res)=>{
    const ID_chat=Math.random() * (100000 - 0) + 0;
    const QUERRY="INSERT INTO `school`.`tb_chat` (`ID_Chat`, `Mensaje`, `Fecha`, `Hora`, `ID_Sala`, `ID_Usuario`) VALUES ('"+Math.round(ID_chat)+"', '"+req.body.message+"', '"+req.body.date+"', '"+req.body.time+"', '"+req.body.sala+"', '"+req.body.user+"');"
    Con.query(QUERRY,(err,row,fielas)=>{
        let Message={"Message":"Se ha enviado el Mensaje"}
        if(err){
            Message={"Message":"No se envio el Mensaje"}
            return res.json(Message);
        }
        return res.json(Message);
    })
});
router.post(API+'POST/Aulas',(req,res)=>{
    const ID_Aulas=Math.random() * (100000 - 0) + 0;
    const QUERRY="INSERT INTO `school`.`tb_aula` (`ID_Aula`, `ID_Sala`, `Nombre_Aula`, `Fecha_Creada`) VALUES ('"+Math.round(ID_Aulas)+"', '"+req.body.idsala+"', '"+req.body.message+"', '"+req.body.fecha+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Creado Aula"}
        if(err){
            Message={"Message":"No se ha Creado Aula"}
            return res.json(Message);
        }
        return res.json(Message);
    })

});

module.exports=router;