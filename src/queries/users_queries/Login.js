const mysqlConnection = require("../../database/db");
const bcrypt = require('bcryptjs');

const login = (req, res) => {
    const loginResource = res;

    const { email, contraseña } = req.body;

    const query = 'SELECT email, contraseña FROM usuarios WHERE email = ?;';

    mysqlConnection.query(query, [email], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0] == undefined)
            return res.status(404).send({ "message": "No existe un usuario con ese correo" });

        bcrypt.compare(contraseña, rows[0].contraseña, (err, res) => {
            if (err)
                return console.log(err);

            if (res) {
                loginResource.status(200).send({ "message": 'Datos válidos', "isValid": true });
            }
            else {
                loginResource.status(401).send({ "message": "Datos Inválidos", "isValid": false });
            }
        });
    });
}
module.exports = login;