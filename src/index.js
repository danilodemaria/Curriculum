const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = 3000

app.use(express.static(__dirname));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

app.listen(PORT, ()=>{
    console.log('🚀️😁🚀️ Server Online on',PORT)
});

app.get('*',function (req, res) {
    res.sendFile(path.join(__dirname+'/error.html'));
  });

  app.use(function(req, res){
    res.sendFile(path.join(__dirname+'/error.html'));
});