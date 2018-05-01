const User = require('../models/user.model');

module.exports = function (app){
    //Validar Login
    app.post('/user',(req, res)=> {
        const userData = {
            user_name: req.body.user_name,
            user_password: req.body.user_password
        }

        User.findUser(userData, (err, data)=>{
            console.log(data);
            if(data && data.msg === 'Login Success'){
                res.json({
                    success: true,
                    data
                })
            } else{
                console.log(data.msg);
                res.status(500).json({
                    msg: 'error'
                })
            }
    })
}
)};
