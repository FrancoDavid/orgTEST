angular.module('Proyecto')
    .controller("LoginController", ["$scope", '$location', function($scope, $location) {
        /**/

        let usuarios = [{
            "username" : 'fra.avalos',
            "password" : '123'
        }];
    

        $scope.login = function (username, password) {
            usuarios.forEach(element => {
                console.log(element.username); 
                if(element.username === username){
                    if(element.password === password){
                        console.log('in');
                        $location.path('/menu').replace();
                        
                    }else{
                        console.log('error');
                        alert('Password incorrecta, vuelva a intentarlo.');
                    }
                } else{
                    console.log('error');
                    alert('Usuario incorrecto, vuelva a intentarlo.');
                }
            });
        }

             
        }

    ])
    .controller("DocController",["$scope", function($scope){
         let documentos = [
            {
                "doc_id":1,
                "doc_date":"2018-04-13",
                "doc_folio":66,
                "doc_name_client":
                "Melisa Estay",
                "doc_total":2000,
                "doc_detail_id":{
                    "detail_id" : 1,
                    "detail_unit": 'Kg',
                    "detail_price": 2000,
                    "detail_amount": 1,
                    "detail_subtotal": 2000,
                    "detail_description": 'Uvas Verdes'    
                }
            },
            {
                "doc_id":2,
                "doc_date":
                "2018-04-29",
                "doc_folio":2,
                "doc_name_client":"Edreil Aguirre",
                "doc_total":1000,
                "doc_detail_id":{
                    "detail_id" : 2,
                    "detail_unit": 'Kg',
                    "detail_price": 1000,
                    "detail_amount": 1,
                    "detail_subtotal": 1000,
                    "detail_description": 'Té Verde'    
                }
            },
            {
                "doc_id":3,
                "doc_date":"2018-04-23",
                "doc_folio":4,
                "doc_name_client":"Franco",
                "doc_total":25000,
                "doc_detail_id":
                {
                    "detail_id" : 3,
                    "detail_unit": 'Kg',
                    "detail_price": 25000,
                    "detail_amount": 1,
                    "detail_subtotal": 25000,
                    "detail_description": 'Pan'
                }
            }
        ];

        $scope.create = (text) => {
            if (text != null){
                documentos.push(text);
                console.log(text);
                alert('Documento Creado con exito!');
                $scope.clean(); 
            }
            
        };

        $scope.docData = {};
    
        $scope.historial = documentos;

        $scope.multi = (amount, price)=>{
            $scope.docData.detail_subtotal = amount * price;
            $scope.docData.detail_total = amount * price;
        }

        $scope.clean = () => {
            $scope.docData = {};
        }
        
        $scope.find = false;
        $scope.countDelete = 0;

        $scope.delete = (folio) => {
            documentos.forEach(element => {
                $scope.countDelete ++;
                if(folio !== null){
                    if(!$scope.find){
                        if(element.doc_folio === folio){
                            console.log('Encontrado y eliminado');
                            $scope.find = true;
                            documentos.splice($scope.countDelete - 1 , 1);
                            alert('Documento Eliminado con Exito!');
                         }
                    }
                }
                
            }  
        )};

        $scope.countEdit = 0;
        $scope.search = (folio) => {
            documentos.forEach(element => {
                $scope.countEdit ++;
                if(folio !== null){
                    if(element.doc_folio === folio){
                        console.log('encontrado');
                        console.log(element);
                        $scope.docData = element;
                        documentos.splice($scope.countEdit - 1 , 1);
                    }
                }
            })
        };

        $scope.edit = (docData) => {
            if (docData != null){
                documentos.push(docData);
                alert('Documento Editado con exito!');
                $scope.clean(); 
            }
        };

        $scope.calc = (amount, price)=>{
            $scope.docData.doc_detail_id.detail_subtotal = amount * price;
            $scope.docData.doc_total = amount * price;
        }


    }])
    
    