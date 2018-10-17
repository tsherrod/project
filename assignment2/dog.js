const http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
   let html = "<html>"
            + "<head>"
            + "</head>"
            + "<body>"
            + "<p> Dog is running.</p>";
    response.write(html);
    setTimeout(function(){
        let newhtml = "<p> hello, this is your dog.</p>"
            + "</body>"
            + "</html>";
            response.write(newhtml);
            response.end();
    }, 10000)
}).listen(8080);