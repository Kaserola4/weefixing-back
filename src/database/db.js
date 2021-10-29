const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;