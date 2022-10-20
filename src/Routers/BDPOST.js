const {Router}=require('express');

const {API}=require('../setting/Config')
const Con=require('../DataBase/DataBase');

const {v4:uuid}=require('uuid')

const router=Router();

//POST Usuarios
router.post(API+'POST/Users',(req,res)=>{
    const IDUser=Math.random() * (100000 - 0) + 0;
    const Codigo=uuid();
    const QUERRY="INSERT INTO tb_usuarios (`ID_Usuario`, `Nombre`, `ApellidoP`, `ApellidoM`, `Correo`, `username`, `Contraseña`, `Tema`, `ID_Rol`, `Codigo`, `Estado`) VALUES ('"+Math.round(IDUser)+"', '"+req.body.name+"', '"+req.body.AP+"', '"+req.body.AM+"', '"+req.body.correo+"', '"+req.body.user+"', '"+req.body.pass+"', 'Default', '"+req.body.idrol+"', '"+Codigo+"', 'activo');"
    //const QUERRY="INSERT INTO tb_usuarios (ID_Usuario, Nombre, ApellidoP, ApellidoM, Correo, username, Contraseña, Tema, ID_Rol, Codigo_Tutor) VALUES ('"+Math.round(IDUser)+"', '"+req.body.name+"', '"+req.body.AP+"', '"+req.body.AM+"', '"+req.body.correo+"', '"+req.body.user+"', '"+req.body.pass+"', 'Default', '"+req.body.idrol+"', '"+Codigo+"');"
    
    Con.query(QUERRY,(err,row,field)=>{
        let Message={"Menssage":"Se ha registrado Correctamente"}
        if(err){
            Message={"Menssage":"No se pudo registrar el usuario"}
        }
        return res.json(Message);
    })
   
});

//POST Unidad
router.post(API+'POST/Unidad',(req,res)=>{
    const IDUnidad=Math.random() * (100000 - 0) + 0;
    let QUERRY="INSERT INTO `tb_unidad` (`ID_Unidad`, `Nombre_Unidada`, `ID_Usuarios`) VALUES ('"+IDUnidad+"', '"+req.body.name+"', '"+req.body.iduser+"');"
    Con.query(QUERRY,(err,row,field)=>{
        let Message={"Menssage":"Se ha registrado Correctamente"}
        if(err){
            Message={"Menssage":"No se pudo registrar el unidad"}
        }
        return res.json(Message);
    });
    
});

//POST Salas
router.post(API+'POST/Salas',(req,res)=>{
    const ID_SALA=Math.random() * (100000 - 0) + 0;
    let QUERRY="INSERT INTO `tb_sala` (`ID_Sala`, `Nombre_Sala`) VALUES ('"+Math.round(ID_SALA)+"', '"+req.body.Nombre+"');"
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
    const QUERRY="INSERT INTO `tb_notificaciones` (`ID_Notificaciones`, `ID_Usuario`, `Visto`, `Mensaje`, `Fecha`, `Hora`) VALUES ('"+Math.round(ID_Noti)+"', '"+req.body.iduser+"', 'T', '"+req.body.message+"', '"+req.body.date+"', '"+req.body.time+"');";
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
    const QUERRY="INSERT INTO `tb_chat` (`ID_Chat`, `Mensaje`, `Fecha`, `Hora`, `ID_Sala`, `ID_Usuario`) VALUES ('"+Math.round(ID_chat)+"', '"+req.body.message+"', '"+req.body.date+"', '"+req.body.time+"', '"+req.body.sala+"', '"+req.body.user+"');"
    Con.query(QUERRY,(err,row,fielas)=>{
        let Message={"Message":"Se ha enviado el Mensaje"}
        if(err){
            Message={"Message":"No se envio el Mensaje"}
            return res.json(Message);
        }
        return res.json(Message);
    })
});
//POST AULAS
router.post(API+'POST/Aulas',(req,res)=>{
    const ID_Aulas=Math.random() * (100000 - 0) + 0;
    const QUERRY="INSERT INTO `tb_aula` (`ID_Aula`, `ID_Sala`, `Nombre_Aula`, `Fecha_Creada`) VALUES ('"+Math.round(ID_Aulas)+"', '"+req.body.idsala+"', '"+req.body.name+"', '"+req.body.fecha+"');";
    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Creado Aula"}
        if(err){
            Message={"Message":"No se ha Creado Aula"}
            return res.json(Message);
        }
        return res.json(Message);
    })

});
//POST ASISTENCIA
router.post(API+'POST/Asistencia',(req,res)=>{
    const ID_Asis=Math.random() * (100000 - 0) + 0;
    let QUERRY="INSERT INTO `tb_asistencia` (`ID_Asistencia`, `ID_Tipo_Asistencia`, `ID_Usuario`, `ID_Aula`,`Fecha`) VALUES ('"+Math.round(ID_Asis)+"', '"+req.body.idtipo+"', '"+req.body.idusuarios+"', '"+req.body.idaula+"', '"+req.body.fecha+"');"
    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Creado Asistencia"}
        if(err){
            Message={"Message":"No se ha Creado Asistencia"}
            return res.json(Message);
        }
        return res.json(Message);
    });
});
//POST Examen
router.post(API+'POST/Examen',(req,res)=>{
    const ID_Examen=Math.random() * (100000 - 0) + 0;
    //const QUERRY="INSERT INTO `tb_examen` (`ID_Examen`, `NombreExamen`) VALUES ('"+Math.round(ID_Examen)+"', '"+req.body.name+"');";
    const QUERRY="INSERT INTO `tb_examen` (`ID_Examen`, `NombreExamen`, `Estado`,`FechaTerminado`,`FechaEmpiezo`) VALUES ('"+Math.round(ID_Examen)+"', '"+req.body.name+"', 'activo', '"+req.body.fechat+"', '"+req.body.fechae+"');"
    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Creado Examen"}
        if(err){
            Message={"Message":"No se ha Creado Examen"}
            return res.json(Message);
        }
        return res.json(Message);
    });
});
//POST Preguntas
router.post(API+'POST/Preguntas',(req,res)=>{
    const ID_Pregunas=Math.random() * (100000 - 0) + 0;
    const QUERRY="INSERT INTO `tb_preguntas` (`ID_Pregunta`, `Pregunta`, `ID_Examen`) VALUES ('"+Math.round(ID_Pregunas)+"', '"+req.body.name+"', '"+req.body.idexamen+"');"
    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Creado Examen"}
        if(err){
            Message={"Message":"No se ha Creado Examen"}
            return res.json(Message);
        }
        return res.json(Message);
    });
});
//POST Respuesta
router.post(API+'POST/Respuesta',(req,res)=>{
    const ID_Resp=Math.random() * (100000 - 0) + 0;
    const QUERRY="INSERT INTO `tb_respuesta` (`ID_Respuesta`, `Respuesta`, `ID_Pregunta`) VALUES ('"+Math.round(ID_Resp)+"', '"+req.body.name+"', '"+req.body.idpreg+"');"

    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Creado Respuesta"}
        if(err){
            Message={"Message":"No se ha Creado Respuesta"}
            return res.json(Message);
        }
        return res.json(Message);
    });
});

//POST Tarea
router.post(API+'POST/Tarea',(req,res)=>{
    const ID_Tarea=Math.random() * (100000 - 0) + 0;
    let QUERRY="INSERT INTO `tb_tarea` (`ID_Tarea`, `Nombre_Tarea`, `Descripcion`, `ID_Unidad`, `Estado`) VALUES ('"+ID_Tarea+"', '"+req.body.name+"', '"+req.body.descripcion+"', '"+req.body.iduni+"', 'Activo');"
    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Creado Tarea"}
        if(err){
            Message={"Message":"No se ha Creado Tarea"}
            return res.json(Message);
        }
        return res.json(Message);
    });
});

//Tarea Respondida
router.post(API+'POST/Tarearesp',(req,res)=>{
    const ID_Tarearespo=Math.random() * (100000 - 0) + 0;
    
    let QUERRY="INSERT INTO `tb_tarea_resp` (`ID_TResp`, `Archivos`, `ID_Usuario`, `ID_Tarea`) VALUES ('"+ID_Tarearespo+"', '"+req.body.arch+"', '"+req.body.idsuario+"', '"+req.body.idtarea+"');"
    
    Con.query(QUERRY,(err,row,fields)=>{
        let Message={"Message":"Se ha Creado Tarea respondida"}
        if(err){
            Message={"Message":"No se ha Creado Tarea reespondida"}
            return res.json(Message);
        }
        return res.json(Message);
    });
});
module.exports=router;