const mysqlConnection = require('../../database/db');

const getRelevantProduct = (res) => {

    const query = `SELECT * FROM productos WHERE calificacion != 0 ORDER BY calificacion DESC LIMIT 12;`

    mysqlConnection.query(query, (err, rows) => {
        if (err) return console.log(err);

        if(rows[0] === undefined)
           return  res.send({"message": "No existen productos relevantes"});
        
        return res.send({ rows });
    });
}

module.exports = getRelevantProduct;