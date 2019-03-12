let https = require('https');
let fs = require('fs');

let options = {
    pfx: fs.readFileSync('./keys/server.pfx'),
    passphrase:'capassword'
};

https.createServer(options, function(req,res){
    res.writeHead(200);
    res.end('hello world!\n');
}).listen(3200, '127.0.0.1');
