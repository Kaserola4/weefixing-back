const mysqlConnection = require('../../database/db');

const addUser = (req, res) => {
    const { nombre_usuario, nombres, apellidos, email } = req.body;


    const query = `
    CALL addCart(@val);
    INSERT INTO usuarios(id_carrito, nombre_usuario, nombres, apellidos, email)
    values(@val, ?, ?, ?, ?);
     `;
    mysqlConnection.query(query, [nombre_usuario, nombres, apellidos, email], (err) => {
        if (err)
            return console.log(err);

        return res.send({ "message:": "Usuario añadido" });

    });

}

module.exports = addUser;
