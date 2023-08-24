const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')

//validamos que no estemos en ambiente de produccion
if(process.env.NODE_ENV != 'production'){
    //se carga la configuraciom archivo .env al process.env
    require('dotenv').config()
}

app.set('port',process.env.PORT || 4000)


//Middleware


app.use(bodyParser.urlencoded({extended:false}))//recibir datos sencillos de formulario
app.use(bodyParser.json())// para recibir formato json
app.use(morgan('combined'))


app.use('/api/v1/users',require('./api/v1/routes/users.routes'))
app.use('/api/v1/articles',require('./api/v1/routes/articles.routes'))



app.listen(app.get('port'),()=>{
    console.log(`Server running on localhost:${app.get('port')}`);
})