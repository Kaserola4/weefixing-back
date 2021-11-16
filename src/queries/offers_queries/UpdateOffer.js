const mysqlConnection = require("../../database/db")

const updateOffer = (req, res) => {
    const { id } = req.params;
    const { id_producto, descripcion, descuento, fecha, duracion } = req.body;
    const query = `
    UPDATE ofertas
    SET id_producto = ?, descripcion = ?, descuento = ?, fecha = ?, duracion = ?
    WHERE id_oferta = ?;
    `;
    const checkQuery = 'SELECT * FROM ofertas WHERE id_oferta = ?;';
    var hasOffer = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0] === undefined) {
            hasOffer = false;
            return res.send({ "message": "No existe una oferta con esa id" });
        }
        
        if (!hasOffer) {
            mysqlConnection.query(query, [id_producto, descripcion, descuento, fecha, duracion, id], (err) => {
                if (err)
                    return console.log(err);

                return res.send({ "message:": "Oferta actualizada" });

            });
        }
    });


}

module.exports = updateOffer;