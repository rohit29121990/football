const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const container = require('./container');
const { Router, Router } = require('express');

container.resolve(function(users){

    const app = SetupExpress();
    
    function SetupExpress(){
        const app = express();
        const server = http.createServer(app);
        server.listen(3000,function(){
            console.log('Listning on port 3000');
        });
        ConfigureExpress(app);
    }

    const router = require('express-promise-router')();
    users.SetRouting(router);
    
    app.use(router);

    //add all the configurations at here
    function ConfigureExpress(app){
        app.use(express.static('public'));// this will make every folder and file availbale is public folder as static for public use
        app.set('view engine','ejs'); // this is used as view enginee
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
    }
    // router

});