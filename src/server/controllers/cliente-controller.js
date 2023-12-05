const pool = require("../db");
const queries = require("../queries/cliente-queries");

// CREATE CLIENTE

const createUsers = async (req, res) => {
    try {
        const { 
            first_name,
            last_name,
            email,
            password } = req.body;

        const user = await pool.query(
            queries.createUsers,
            [ last_name, first_name, email, password]
         );

         res.json(user.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
}

// Read: Get all mangas

const getUsers = async (req, res) => {
    try {
        const allCliente = await pool.query(queries.getUsers);
        res.json(allCliente.rows);
    } catch (err) {
        console.error(err.message);
    }
}

//  Read: Get a specific manga by ID

const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const getOneUser = await pool.query(queries.getOneUser, [id]);
        res.json(getOneUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

// Update: Update a manga by ID

const getUpdate = async (req, res) => {
    try {
        const {id} = req.params;
        const { 
            first_name,
            last_name,
            email,
            password } = req.body;
        const getUpdate = await pool.query(queries.getUpdate, [first_name,last_name,email,password,id]);
        res.json("Updated successfully");
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    createUsers,
    getUsers,
    getOneUser,
    getUpdate,
}