const mysqlConnection = require('../../database/db');

const addUser = (req, res) => {
    const { nombre_usuario, nombres, apellidos, email } = req.body;

    // TODO: arreglar los problemas con el carrito en mysql
    const query = 'CALL addUser(?, ?, ?, ?);';
    
    mysqlConnection.query(query, [nombre_usuario, nombres, apellidos, email], (err) => {
        if (err)
            return console.log(err);

        return res.send({ "message:": "Usuario añadido" });

    });

}

module.exports = addUser;
