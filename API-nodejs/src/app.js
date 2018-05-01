//Inicializar Express
const express = require('express');
const app = express();

//Dependencias
const body = require('body-parser');//entender las peticiones
const morgan = require('morgan');//lanza mensajes(get/post/delete/put) al servidores 

//Configuraciones
//si no existe puerto definido, que se utilize el 3000
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(body.json());

//Rutas
require('./routes/doc.router')(app);
require('./routes/user.router')(app);


app.listen(app.get('port'), () => {
    console.log('Server ready! ;)');
})