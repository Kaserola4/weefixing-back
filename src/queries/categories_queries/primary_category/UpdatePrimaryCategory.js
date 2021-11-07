const mysqlConnection = require("../../../database/db")

const updatePrimaryCategory = (req, res) => {
    const { id } = req.params;
    const { nombre_categoria } = req.body;
    const query = `
    UPDATE categorias_primarias
    SET nombre_categoria = ?
    WHERE id_categoria = ?;
    `;
    const checkQuery = 'SELECT * FROM categorias_primarias WHERE id_categoria = ?;';
    let hasCategory = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);
        
        if(rows[0] == undefined)
           return  res.send({"message": "No existe una categoría con esa id"});
           hasCategory = false;
    });

    if (!hasCategory) return;

    mysqlConnection.query(query, [nombre_categoria, id], (err) => {
            if (err)
                return console.log(err);

            return res.send({ "message:": "Categoría actualizada" });

        });
}

module.exports = updatePrimaryCategory;