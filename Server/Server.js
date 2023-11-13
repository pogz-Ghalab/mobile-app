const express = require( 'express' );
const mainServer = express()

const cors = require('cors')
const bodyParser = require('body-parser')
mainServer.use(cors());
mainServer.use(bodyParser.json());
mainServer.use(bodyParser.urlencoded({extended: true}));

var login = require('./login');
var signup = require('./signup');
var logout = require('./logout');

const { networkInterfaces } = require('os');

mainServer.listen(8081, err => {
    if (err) { console.log("there was a problem", err); return; }

    console.log(`Sekai saiko no server is on port 8081 Ctrl + C to stop`)
});

mainServer.get('/' ,(req, res ) => {
    res.type('text/plain')
    res.send('Server staring! Welcome :)')
});

mainServer.use('/login', login);
mainServer.use('/registration', signup);
mainServer.use('/logout', logout);

mainServer.use( (req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 not found Bruh')
});

