const mysqlConnection = require("../../database/db")

const updateCarrousel = (req, res) => {
    const { id } = req.params;
    const { titulo, ruta_imagen } = req.body;
    const query = `
    UPDATE carrusel
    SET titulo = ?, ruta_imagen = ?
    WHERE id_carrusel = ?;
    `;
    const checkQuery = 'SELECT * FROM carrusel WHERE id_carrusel = ?;';
    var hasCarrusel = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0] === undefined) {
            hasCarrusel = false;
            return res.send({ "message": "No existe un carrusel con esa id" });
        }
    });

    if (!hasCarrusel) return;

    mysqlConnection.query(query, [titulo, ruta_imagen, id], (err) => {
        if (err)
            return console.log(err);

        return res.send({ "message:": "Carrusel actualizado" });

    });
}

module.exports = updateCarrousel;