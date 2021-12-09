const mysqlConnection = require('../../database/db');
const bcrypt = require('bcryptjs');

const addUser = async (req, res) => {
    const { nombre_usuario, nombres, apellidos, email, contraseña } = req.body;

    // TODO: arreglar los problemas con el carrito en mysql
    const query = `
    INSERT INTO usuarios (nombre_usuario, nombres, apellidos, email, contraseña)
    VALUES (?, ?, ?, ?, ?);
    `; 
    
    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contraseña, salt);

    mysqlConnection.query(query, [nombre_usuario, nombres, apellidos, email, hashedPassword], (err) => {
        if (err)
            return console.log(err);

        return res.send({ "message:": "Usuario añadido" });

    });

}

module.exports = addUser;
