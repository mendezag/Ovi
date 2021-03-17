const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require("./dbPrueba")
const Dbprueba = mongoose.model('dbPrueba')

app.use(bodyParser.json())

async function connecting(){
    const mongoUri = 'mongodb+srv://maximiliano:Riquelme10@cluster0.y9ugp.mongodb.net/ovi_database_store?retryWrites=true&w=majority'
    await mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: false,
    //useCreateIndex: true
})

}

mongoose.connection.on('Conectado',() =>{
    console.log('Conectado correctamente')
})

mongoose.connection.on('error',(err) => {
    console.log('error', Error)
})

app.post('/send-data',(req,res) =>{

    const dbPrueba = new Dbprueba({
        "id": "req.body-id",
        "nombre": "req.body-nombre",
        "apellido": "req.body-apellido",
    })
    dbPrueba.save()
    .then(data =>{
        console.log(data)
        res.send('Dato agregado')
    }).catch(err =>{
        console.log(err)
        return;
})


})

app.get('/',async(req,res)=>{
        res.send('Conectado en el puerto 3000')
    
})

app.listen(3000,()=>{
    console.log('Conectado')
    //console.log(mongoUri)
})