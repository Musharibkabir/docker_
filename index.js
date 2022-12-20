const express = require('express');
const path    = require('path');
const server  = express();
const port    = 5600;


server.use(express.json()); 
server.use(express.urlencoded({extended: false})); 



server.listen(port, function(error){   
    if(error) {
        console.log('There was something incorrect.', error) 
    } else {
        console.log('server is accessible on port ' + port)
    }
});


//get request for initial domain page
server.get('/', (req, res) => {
    res.json({message:'Docker Successful'})
});
