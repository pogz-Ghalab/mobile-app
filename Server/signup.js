var express = require('express');
var express = require('express');
var router = express.Router();
var client = require('./dbclient');
const dbfunctions = require("./queryFunctions");

router.post('/', async (req, res) => {
    console.log("-checking if server. there ");

    var reg_first_name = req.body.reg_first_name
    var reg_last_name = req.body.reg_last_name
    var reg_email = req.body.reg_email
    var reg_password = req.body.reg_password

    var dbemail = await dbfunctions.getAllUsernames(client)
    let len = await dbfunctions.countDBrows(client);

    let n = 0;
    while (n < len) {
        console.log("-checking if server. happens");
        if (reg_email == dbemail[n].email) {
            console.log(reg_email);
            console.log("[Error] Email already exists, please enter a different email.");
            res.send("KO");
            return
        }
        console.log("-checking if server. in func");

        n++;
    }
    console.log("-checking if server. 3");

    dbfunctions.registerNewUser(client, reg_first_name, reg_last_name, reg_email, reg_password)
    console.log("-Username has been registered.");
    res.send("OK");
});

module.exports = router;