angular.module('Proyecto',['ngRoute', 'ngResource', 'ngStorage'])
.config(['$routeProvider', function($routeProvider) { 
    $routeProvider
        .when('/',{
            templateUrl: '/angularjs/app/templates/login.template.html',
            controller: 'LoginController'
        })
        .when('/menu',{
            templateUrl: '/angularjs/app/templates/menu.template.html'
        })
        .when('/historial',{
            templateUrl: '/angularjs/app/templates/historial.template.html',
            controller: 'DocController'
        })
        .when('/create',{
            templateUrl: '/angularjs/app/templates/create.template.html',
            controller: 'DocController'
        })
        .when('/edit',{
            templateUrl: '/angularjs/app/templates/edit.template.html',
            controller: 'DocController'
        })
        .when('/delete',{
            templateUrl: '/angularjs/app/templates/delete.template.html',
            controller: 'DocController'
        })
}])