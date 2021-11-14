const mysqlConnection = require('../../database/db');

const getCart = (req, res) => {
    const { id } = req.params;

    let query = (id == 0) ?
        'SELECT * FROM carritos;' : 'SELECT * FROM carritos WHERE id_carrito = ?;';

    mysqlConnection.query(query, [id], (err, rows) => {
        if (err) return console.log(err);

        if(rows[0] === undefined)
           return  res.send({"message": "El carrito no existe"});
        
        return res.send({ rows });
    });
}

module.exports = getCart;