const mysql=require('mysql2');
const {BDHOST,BDUSER,BDPASS,BDPORT,BDDATABASE}=require('../setting/Config');

const Conexion=mysql.createPool({
    host:BDHOST,
    user:BDUSER,
    password:BDPASS,
    database:BDDATABASE,
    port:BDPORT
});

module.exports=Conexion;