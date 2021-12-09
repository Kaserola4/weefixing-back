const mysqlConnection = require('../../../database/db');
const bcrypt = require('bcryptjs');

const addUser = (req, res) => {
    const { nombre_usuario, nombres, apellidos, email, contraseña } = req.body;

    const checkExistenceQuery = `
    SELECT * FROM usuarios 
    WHERE email = ?;
    `

    const query = `
    INSERT INTO usuarios (nombre_usuario, nombres, apellidos, email, contraseña)
    VALUES (?, ?, ?, ?, ?);
    `;

    mysqlConnection.query(checkExistenceQuery, [email], async (err, rows) => {
        if (err)
            return console.log(err);

        if (rows[0] != undefined) {
            res.send({ "message": "El correo electrónico ya se encuentra en uso" });
        }
        else if (rows[0] == undefined){
            // Encriptar la contraseña
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(contraseña, salt);

            mysqlConnection.query(query, [nombre_usuario, nombres, apellidos, email, hashedPassword], (err) => {
                if (err)
                    return console.log(err);

                return res.send({ "message:": "Usuario añadido" });

            });
        }
    });


}

module.exports = addUser;
