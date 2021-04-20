import mysql from "mysql";

const db = mysql.createConnection({
    host : 'freedb.tech',
    database : 'freedbtech_recuritment',
    user : 'freedbtech_harish',
    password : 'pass@1234'
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('MySQL Connected');
})

export default db;
