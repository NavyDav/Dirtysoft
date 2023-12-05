const mysql = require("mysql");

const pool = mysql.createPool({
    host: "MacBook-Air-de-Harry.local",
    user: "boisson",
    password: "GARRY100",
    port: 3306,  // Port par défaut pour MySQL
    database: "dirty_schema"
});

module.exports = pool;
