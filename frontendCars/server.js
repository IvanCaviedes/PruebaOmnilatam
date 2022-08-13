const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/frontend-cars'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/frontend-cars/index.html'));
    console.log("este es el dirmname",__dirname)
});

app.listen(process.env.PORT || 8080,()=>{
    console.log("servidor corriendo")
});