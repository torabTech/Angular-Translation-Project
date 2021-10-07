require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

require('./api/db/dbconnection');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'node_modules')));

const gameMainRoutes = require('./api/routes/games');
const gamePublishRoutes = require('./api/routes/publisher');
const gameReviewRoutes = require('./api/routes/review');


app.use(express.json());

/* app.get('/',function(req,res){
    res.send('index');
}) */

app.use('/api/games',gameMainRoutes);
app.use('/api/games/:id/publisher',gamePublishRoutes);
app.use('/api/games/:id/review',gameReviewRoutes);




const port = process.env.port || 3000;

server = app.listen(port,function(){
    console.log(`Server is running at port: ${server.address().port}`);
});