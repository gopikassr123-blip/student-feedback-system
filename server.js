const http = require("http");

const server = http.createServer((req,res)=>{

if(req.method==="POST" && req.url==="/feedback"){

let body="";

req.on("data",(chunk)=>{
body+=chunk.toString();
});

req.on("end",()=>{

console.log("Feedback Received:");
console.log(JSON.parse(body));

res.writeHead(200,{
"Content-Type":"text/plain",
"Access-Control-Allow-Origin":"*"
});

res.end("Success");

});

}

});

server.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});