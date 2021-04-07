// const http = require('http');

// http.createServer((_,res) =>{
// 	res.write('NodeJs Server ss');
// 	res.end();
// }).listen(4040);

const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/dishes');

const app = express();
const port= process.env.PORT || 4041;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', userRoute );

app.listen(port,()=>{
	console.log(`Server is running on port: ${port}`);
});
