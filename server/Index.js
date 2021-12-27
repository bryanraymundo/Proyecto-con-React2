const express = require ("express");
const mysql = require ("mysql");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

const datos_base = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database : "mydb",
});

app.post('/registro', (req, res) => {

	const username = req.body.username;
	const password = req.body.password;

  datos_base.query("INSERT INTO usuario (Nombre, contrasenia) VALUES (?,?)", [username, password], (err, result) =>
  {
    if (err) {
        res.status(500).send(err);
    }
    else
    {
      if (result.length > 0)
      {
        res.status(200).send(result[0])
      }
      else
      {
        res.status(400).send("No existe el usuario")
      }
   }
  })
  datos_base.end()
})

app.get('/', (req, res) => {
  res.send('TODO OK')
})

app.listen(4000, ()=> {
  console.log("corriendo en el servicor 3001");
});
