const express = require('express');
const { exec } = require("child_process");
var bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Joi = require('joi')
const app = express();
const router = express.Router();
const PORT = 3000;
app.use(express.json())
app.use(cors())

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: false
 }));
 
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/pull', (req,res) => {
    console.log('🚀️😁🚀️ Server Online on',PORT)
    exec("git pull", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    console.log('🚀️😁🚀️ Server Online on',PORT)
    res.send('Ok');
});

app.use('/', router);

app.listen(PORT, ()=>{
    console.log('🚀️😁🚀️ Server Online on',PORT)
});

// app.get('*',function (req, res) {
//     res.sendFile(path.join(__dirname+'/error.html'));
//   });

// app.use(function(req, res){
//     res.sendFile(path.join(__dirname+'/error.html'));
// });