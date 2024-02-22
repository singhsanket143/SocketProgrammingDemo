const http = require('http');

const server = http.createServer((req, response) => {
    console.log("New connection was created");
    if(req.url === '/home') {
        return response.end('welcome home')
    } else {
        return response.end("Something something !!!!")
    }
});
    

server.listen(3000, () => {
    console.log("server started at port 3000")
});