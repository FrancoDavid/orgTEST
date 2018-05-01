const Document = require('../models/doc.model');

module.exports = function (app){
    //Rutas del servidor

    //Listar Documentos
    app.get('/doc', (req, res)=>{
        Document.getDoc((err, data) =>{
            res.status(200).json(data);
        })
    });

    //Crear Documento
    app.post('/doc',(req, res)=> {
        //console.log(req.body);
        const userData = {
            doc_id: null,
            doc_date: req.body.doc_date,
            doc_folio: req.body.doc_folio,
            doc_name_client: req.body.doc_name_client,
            doc_total: req.body.doc_total 
        }
        console.log(userData);
        Document.insertDoc(userData, (error, data )=>{
            if(data && data.insertId){
                res.json({
                    success:true,
                    msg: 'Documento Creado',
                    data: data
                })
            } else {
                res.status(500).json({
                    success:false,
                    msg:error
                })
            }
        })
    });

    //Actualizar Documento
    app.put('/doc/:id', (req, res)=>{
        const userData = {
            doc_id: req.params.id,
            doc_date: req.body.doc_date,
            doc_folio: req.body.doc_folio,
            doc_name_client: req.body.doc_name_client,
            doc_total: req.body.doc_total 
        }

        Document.updateDoc(userData, (err, data) => {
            if(data && data.msg){
                res.json(data.doc_date);
            } else{
                res.json({
                    success: 'false',
                    msg: 'error'
                })
            }
        })
    });

    //Eliminar Documento 
    app.delete('/doc/:id', (req, res)=>{
        Document.deleteDoc(req.params.id, (err, data)=>{
            console.log(data);
            if(data && data.msg == 'Eliminado' || data.msg == 'No Existe' ){
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
    });
}


