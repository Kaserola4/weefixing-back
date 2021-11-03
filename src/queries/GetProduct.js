const mysqlConnection = require('../database/db');

const getProduct = (req, res) => {
    const { id } = req.params;
    
    let query = (id == 0) ?
        'SELECT * FROM productos;' : 'SELECT * FROM productos WHERE id_producto = ?;';

    mysqlConnection.query(query, [id], (err, rows) => {
        if (err) return console.log(err);

        if(rows[0] == undefined)
           return  res.json({"message": "No existe un producto con esa id"});
            
        return res.json({ rows });
        

    });
}

module.exports = getProduct;