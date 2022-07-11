const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("<h1>this is the new server created</h1>")
    res.write("\n\nhey folks")
    res.write("\n")
    res.write(JSON.stringify({Name: "Hariharan P K", Age: "23"}))
    res.end("\nTime to go");
})
server.listen(5500);