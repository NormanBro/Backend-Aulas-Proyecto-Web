const {Router}=require('express');
const {API}=require('../setting/Config')
const Con=require('../DataBase/DataBase');

const router=Router();

//Usuarios
router.get(API+'GET/Users',(req,res)=>{
    const QUERRY="SELECT * FROM tb_usuarios;";
    Con.query(QUERRY,(err,row,field)=>{
        let Retorno=row;
        if(err){
            Retorno={"Menssage":"Error en obtener datos"};
        }
        return res.json(Retorno);
    });
})

router.get(API+'GET/Users/:id', (req,res)=>{
    const QUERRY="SELECT * FROM tb_usuarios where ID_Usuario='"+req.params.id+"';"
    Con.query(QUERRY,(err,row,field)=>{
        if(err){
            Retorno={"Menssage":"Error en obtener datos"};
        }
        return res.json(row);
    });
});

//Unidad
router.get(API+'GET/Unidad',(req,res)=>{
    let QUERRY="select * from tb_unidad;"
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    })
    
});

router.get(API+'GET/Unidad/:id',(req,res)=>{
    let QUERRY="select * from tb_unidad where ID_Unidad='"+req.params.id+"';";
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    })
});
router.get(API+'GET/Unidad/User/:id',(req,res)=>{
    let QUERRY="select * from tb_unidad where ID_Usuarios='"+req.params.id+"';";
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    })
});

//ROLES
router.get(API+'GET/Roles',(req,res)=>{
    const QUERRY ="select * from tb_roles;";
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    })
})
router.get(API+'GET/Roles/:id',(req,res)=>{
    const QUERRY="SELECT * FROM tb_roles where ID_Rol='"+req.params.id+"';";
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    })
});

// Salas
router.get(API+'GET/Salas',(req,res)=>{
    const QUERRY ="select * from tb_sala;";
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    })
});
router.get(API+'GET/Salas/:id',(req,res)=>{
    const QUERRY="SELECT * FROM tb_sala where ID_Sala='"+req.params.id+"';";
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    })
});
// Notificaciones
router.get(API+'GET/Notif/User/:id',(req,res)=>{
    const QUERRY="select * from tb_notificaciones where ID_Usuario='"+req.params.id+"';"
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    });
});
// Chats
router.get(API+'GET/Chat/Sala/:id',(req,res)=>{
    const QUERRY="select * from tb_notificaciones where ID_Sala='"+req.params.id+"';"
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    })
});
//Aulas
router.get(API+'GET/Aulas',(req,res)=>{
    QUERRY="select * from tb_aula;";
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    });
});
router.get(API+'GET/Aulas/:id',(req,res)=>{
    QUERRY="select * from tb_aula where ID_Aula='"+req.params.id+"';";
    Con.query(QUERRY,(err,row,fields)=>{
        return res.json(row);
    });
});
module.exports=router;