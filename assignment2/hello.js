const http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    let html = "<html>"
            + "<head>"
            + "</head>"
            + "<body>"
            + "<p> hello, this is your dog.</p>"
            + "</body>"
            + "</html>";
    response.write(html);
    response.end();
}).listen(8000);
console.log('Listening on port 8000...');