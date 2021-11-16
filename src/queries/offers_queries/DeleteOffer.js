const mysqlConnection = require('../../database/db');

const deleteOffer = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM ofertas WHERE id_oferta = ?;';
    const checkQuery = 'SELECT * FROM ofertas WHERE id_oferta = ?;';
    var hasOffer = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0] === undefined) {
            hasOffer = false;
            return res.send({ "message": "No existe una oferta con esa id" });
        }

        if (!hasOffer) return;

        mysqlConnection.query(query, [id], (err) => {
            if (err) return console.log(err);

            return res.send({ "message": "Oferta eliminada exitosamente" });
        });

    });

}

module.exports = deleteOffer;