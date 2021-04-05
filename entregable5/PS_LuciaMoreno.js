const PORT = process.env.PORT || 5000;
const random = (max, min)=>Math.random()*(max-min+1)+min;

const http = require("http");

const server = http.createServer();

server.on('request', (req, res)=>{
    
    let miObjeto = {
        id:  Math.floor(random(1,10)),
        title: `Producto ${Math.floor(random(1,10))}`,
        price: Math.round(random(0, 9999)*100)/100,
        thumbnail: `Foto ${Math.floor(random(1,10))}`
    }

    res.end(JSON.stringify(miObjeto));
        
})

server.listen(PORT, ()=>{
    console.log(`Server Listening on PORT ${PORT}`);
});