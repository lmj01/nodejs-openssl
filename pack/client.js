let https = require('https');
let fs = require('fs');

let options = {
    hostname: '127.0.0.1',
    port:3200,
    path:'/',
    method:'GET',
    pfx:fs.readFileSync('./keys/server.pfx'),
    passphrase:'capassword',
    agent:false
};

options.agent = new https.Agent(options);
var req = https.request(options, function(res){
    console.log("StatusCode:", res.statusCode);
    console.log("headers:", res.headers);
    res.setEncoding('utf-8');
    res.on('data', function(d){
        console.log(d);
    })
});
req.end();
req.on('error', function(e){
    console.log(e);
});