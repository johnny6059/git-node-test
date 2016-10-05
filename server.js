"use strict";

function run_server() {
    let express = require('express');

    let app = express();

    app.set('port', 3000);

    app.get('/', function(req, res){
        res.send('Express works!');
    });

    app.listen(app.get('port'), function(){
        console.log('Express started!');
    });
}

module.exports = run_server;
