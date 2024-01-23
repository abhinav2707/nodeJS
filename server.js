const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("Hello World")
    if (req.url == "/product")
    {
        return res.end("from product")
    }
  res.end("from server")
})
server.listen(3100 , () => {
    console.log("server created")
})