const mysqlConnection = require("../../../database/db")

const addSecondaryCategory = (req, res) => {
    const {nombre_categoria} = req.body;

    const query = `
    INSERT INTO categorias_secundarias (nombre_categoria) 
    VALUES (?);
    `;

    mysqlConnection.query(query, [nombre_categoria], (err) => {
        if (err) 
            console.log(err);

        return res.send({"message": "Categoria añadida con éxito"});
    });
}

module.exports = addSecondaryCategory;