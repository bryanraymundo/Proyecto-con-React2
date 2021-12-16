const express = require ("express");
const app = express();
const mysql = require("mysql");
const cors=require("cors");



app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
user:"root",
host: "localhost",
password: "root",
database: "mydb",
});

app.post("/contacto",(req,res)=>{
    
    const nombre_completo=req.body.nombre_completo;
    const correo_e=req.body.correo_e;
    const telefono=req.body.telefono;
    const msginput=req.body.msginput;
    
  //  const descripcion=req.boddy.descripcion;
    db.query(
        "INSERT INTO contacto (nombre_completo,correo_e,telefono, Mensaje) values (?,?,?,?,?)",
        [nombre_completo,correo_e,telefono,msginput],
        (err,result) => {
            if(err){
                console.log(err);
            }else{
                res.send("values Insertd");
            }
        });
});

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM contacto", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.put("/update", (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query(
      "UPDATE contacto SET wage = ? WHERE id = ?",
      [wage, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM contacto WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3000 ,()=>{
    console.log("si coneccion exitosa");
});