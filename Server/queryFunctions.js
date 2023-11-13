const { reject } = require("async");
var client = require('./dbclient');

//get an object containing all usernames
async function getAllUsernames(client){
    var jsonobj = null;
    const myPromise = await new Promise((resolve, reject) => {  
        client.query('SELECT * FROM users;', (err, result)=>{
            if (!err){
                jsonobj = JSON.parse(JSON.stringify(result.rows));
                resolve()
            } else {
                reject()
                console.log(err.message);
            }
        });
    });
    console.log("-checking if server. there");

    //console.log(jsonobj)
    return jsonobj;
}

//input the username and get its password
async function getUserPassword(client, username){
    var jsonobj = null;
    const myPromise = await new Promise((resolve, reject) => {  
        str = "select * from users where email = " + "'" + email + "'" + ";";
        console.log(str);
        client.query(str, (err, result)=>{
            if (!err){
                jsonobj = JSON.parse(JSON.stringify(result.rows[0]))
                console.log(jsonobj.password) //display the password
            } else {
                console.log(err.message);
            }
        });
    }); 
    return jsonobj.password;
}

//input the username and password and register a new user
async function registerNewUser(client, first_name, last_name, email, password){
    console.log("-checking if server.");
    const myPromise = await new Promise((resolve, reject) => {  
        str = "INSERT INTO users (first_name, last_name, email, password) values ('" + first_name + "', '" + last_name + "', '" + email + "', '" + password + "');";
        client.query(str, (err, result)=>{
            if (err){
                console.log(err.message);
                return null
            }
        });
    });
    return myPromise;
}

//count number of rows
async function countDBrows(client){
    
    return new Promise((resolve, reject) => {  
        var jsonobj = null;
        console.log("-checking if server.");
        //client.query("SELECT count(*) AS exact_count FROM users;", (err, result)=>{
        client.query("SELECT * FROM users;", (err, result)=>{

            if (!err){
                jsonobj = JSON.parse(JSON.stringify(result))
                resolve(jsonobj.rowCount);
            } else {
                console.log(err.message);
                reject();
            }

        });

    });
}

module.exports = { getAllUsernames, getUserPassword, registerNewUser, countDBrows};
