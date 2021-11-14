const mysqlConnection = require("../../database/db")

const addOffer = (req, res) => {
    const { id_producto, descripcion, descuento, fecha, duracion } = req.body;

    const query = `
    INSERT INTO ofertas (id_producto, descripcion, descuento, fecha, duracion) 
    VALUES (?, ?, ?, ?, ?);
    `;

    mysqlConnection.query(query, [id_producto, descripcion, descuento, fecha, duracion], (err) => {
        if (err)
            console.log(err);

        return res.send({ "message": "Oferta añadida con éxito" });
    });
}

module.exports = addOffer;