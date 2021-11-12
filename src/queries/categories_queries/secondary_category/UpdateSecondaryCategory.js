const mysqlConnection = require("../../../database/db")

const updateSecondaryCategory = (req, res) => {
    const { id } = req.params;
    const { nombre_categoria } = req.body;
    const query = `
    UPDATE categorias_secundarias
    SET nombre_categoria = ?
    WHERE id_categoria = ?;
    `;
    const checkQuery = 'SELECT * FROM categorias_secundarias WHERE id_categoria = ?;';
    var hasCategory = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0] == undefined) {
            hasCategory = false;
            return res.send({ "message": "No existe una categoría con esa id" });
        }
    });

    if (!hasCategory) return;

    mysqlConnection.query(query, [nombre_categoria, id], (err) => {
        if (err)
            return console.log(err);

        return res.send({ "message:": "Categoría actualizada" });

    });
}

module.exports = updateSecondaryCategory;