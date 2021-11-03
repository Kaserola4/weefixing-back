const mysqlConnection = require('../database/db');

const addOrEditProduct = (req, res) => {
    const { id } = req.params;
    const { sku, nombre, descripcion, categoria_primaria,
        categoria_secundaria, precio, stock, fecha, calificacion, ruta_imagen } = req.body;
    // Llama al procedimiento guardado en stored_procedures, ese archivo se debe de ejecutar junto con la creación de la base de datos.
    // Lo meto aquí para tener visible en todo momento el procedimiento y a la vez poder editar el procedimiento
    const query = `CALL addOrEditProduct(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    let updating = id != 0 ? true : false;

    mysqlConnection.query(query, [id, sku, nombre, descripcion, categoria_primaria,
        categoria_secundaria, precio, stock, fecha, calificacion, ruta_imagen], (err) => {
            if (err)
                return console.log(err);

            if (updating)
                return res.json({ "message:": "Producto actualizado" });

            return res.json({ "message:": "Producto añadido" });

        });

}
module.exports = addOrEditProduct;
