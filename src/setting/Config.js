require('dotenv').config()

const BDHOST=process.env.DBHOST;
const BDUSER=process.env.DBUSER;
const BDPASS=process.env.DBpassword;
const BDDATABASE=process.env.DBdatabase;
const API=process.env.API;
const BDPORT=process.env.Puerto;

module.exports={
    API,
    BDHOST,
    BDUSER,
    BDPASS,
    BDDATABASE,
    BDPORT
}