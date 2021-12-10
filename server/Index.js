const express = require ("express");
const app = express();
const mysql = require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
user:'root',
host: 'localhost',
password: 'holamama1999',
database: 'web'
});

app.post('/create',(req,res)=>{
    console.log(req.body);
    const nombre=req.boddy.nombre;
    const email=req.boddy.email;
    const telefono=req.boddy.telefono;
    const descripcion=req.boddy.descripcion;

    db.query(
        'INSERT INTO employees (nombre,email,telefono,descripcion) values (?,?,?,?)',
        [nombre,email,telefono,descripcion],
        (err,result) => {
            if(err){
                console.log(err);
            }else{
                res.send("values Insertd");
            }
        }
        );
});

app.listen(3001 ,()=>{
    console.log("si coneccion exitosa");
});