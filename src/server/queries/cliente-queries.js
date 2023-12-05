const createUsers = "INSERT INTO client (last_name, first_name, email, password) VALUES ($1, $2, $3, $4) RETURNING ";
const getUsers = "SELECT FROM client";
const getOneUser = "SELECT * FROM client WHERE client_id = $1";
const getUpdate = "UPDATE client SET first_name= $1,last_name= $2,email= $3,password = $4 WHERE  client_id = $5";

module.exports = {
    createUsers,
    getUsers,
    getOneUser,
    getUpdate,
}