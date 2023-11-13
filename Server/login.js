var express = require('express');
var router = express.Router();
var LoggedUser = require('./loggeduser');
const dbfunctions = require("./queryFunctions");
var client = require('./dbclient');


router.post('/', async (req, res) => {

    if (LoggedUser.loggedin) {
        console.log("User already logged in");
        res.send("KO");
        return;
    }
    var email = req.body.email;
    var password = req.body.password;
    console.log("userlogin = " + req.body.user);

    var dbemail = await dbfunctions.getAllUsernames(client);
    let len = await dbfunctions.countDBrows(client);
    for (let n = 0; n < len; n++){
        if (email == dbemail[n].email) {

            if (password == dbemail[n].password) {
                console.log("Correct password. Logging in!\n");

                res.send("OK");

                LoggedUser.email = email;
                LoggedUser.loggedin = true;
                return;
            } else {
                console.log("Wrong password!")
                res.send("KO");
                return;
            }
        }
    }
    res.send("KO");
});

module.exports = router;