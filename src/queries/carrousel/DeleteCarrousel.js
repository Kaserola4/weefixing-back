const mysqlConnection = require('../../database/db');

const deleteCarrousel = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM carrusel WHERE id_carrusel = ?;';
    const checkQuery = 'SELECT * FROM carrusel WHERE id_carrusel = ?;';
    var hasProduct = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0] === undefined) {
            hasProduct = false
            return res.send({ "message": "No existe un carrusel con esa id" });
        }

        if (!hasProduct) return;

        mysqlConnection.query(query, [id], (err) => {
            if (err) return console.log(err);

            return res.send({ "message": "Carrusel eliminado exitosamente" });


        });
    });

}

module.exports = deleteCarrousel;