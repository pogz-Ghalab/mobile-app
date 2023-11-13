var express = require('express');
var router = express.Router();
var LoggedUser = require('./loggeduser');

router.get("/logout", async (req, res) => {
    if (!LoggedUser.loggedin){
        return;
    }

    LoggedUser.loggedin = false;
    LoggedUser.username = "";
    res.redirect("/");
});

module.exports = router;