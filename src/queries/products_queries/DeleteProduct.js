const mysqlConnection = require('../../database/db');

const deleteProduct = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM productos WHERE id_producto = ?;';
    const checkQuery = 'SELECT * FROM productos WHERE id_producto = ?;';
    var hasProduct = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0] === undefined) {
            hasProduct = false
            return res.send({ "message": "No existe un producto con esa id" });
        }

        if (!hasProduct) return;

        mysqlConnection.query(query, [id], (err) => {
            if (err) return console.log(err);

            return res.send({ "message": "producto eliminado exitosamente" });


        });
    });

}

module.exports = deleteProduct;