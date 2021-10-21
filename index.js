require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

require('./api/db/dbconnection');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'node_modules')));

app.use(cors());

const gameMainRoutes = require('./api/routes/games');
const userRegisteration = require('./api/routes/registerations');


app.use(express.json());


app.use('/api/games',gameMainRoutes);
app.use('/api/register',userRegisteration);

const port = process.env.port || 3000;

server = app.listen(port,function(){
    console.log(`Server is running at port: ${server.address().port}`);
});