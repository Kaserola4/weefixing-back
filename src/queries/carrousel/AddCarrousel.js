const mysqlConnection = require("../../database/db")

const addCarrousel = (req, res) => {
    const { titulo, ruta_imagen } = req.body;

    const query = `
    INSERT INTO carrusel (titulo, ruta_imagen) 
    VALUES (?, ?);
    `;

    mysqlConnection.query(query, [titulo, ruta_imagen], (err) => {
        if (err) {
            console.log(err);
            res.send({ "message": "Se ha producido un error" });
        }
        else {
            return res.send({ "message": "Carrusel añadido con éxito" });
        }
    });
}

module.exports = addCarrousel;