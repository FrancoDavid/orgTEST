const mysql = require('mysql');
const db = require('../db/conf');

//Crear conexión con bd mysql
connection = mysql.createConnection(db);

let userModel = {};//variable para almacenar e interactuar con la bd

//Buscar usuario
userModel.findUser = (userData, callback) => {
  if(connection){
    let sql1 = `
        SELECT * FROM Usuario WHERE user_name = ${connection.escape(userData.user_name)}
    `;
    connection.query(sql1, (err, row) => { 
        if(row.length !==  0 ){
          console.log(row);
            //eliminar
            let sql = `
                SELECT * FROM Usuario WHERE user_name = ${connection.escape(userData.user_name)}
                AND user_password = ${connection.escape(userData.user_password)}

            `;
            connection.query(sql, (err, row)=>{
              console.log(row);
                if(row.length !== 0){
                    callback(null, {
                      msg: 'Login Success'
                    })
                } else{
                    callback(null, {
                        msg:'Contrasenna Incorrecta'
                    })
                }
            })
        } else{
            callback(null, {
                msg:'No Existe Usuario'
            })
        }
    })
}
}

module.exports = userModel;