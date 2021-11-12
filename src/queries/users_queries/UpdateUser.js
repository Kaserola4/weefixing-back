const mysqlConnection = require("../../database/db")

const updateUser = (req, res) => {
    const { id } = req.params;
    const { nombre_usuario, nombres, apellidos, email } = req.body;
    const query = `
    UPDATE usuarios
    SET nombre_usuario = ?, nombres = ?, apellidos = ?, email = ?
    WHERE id_usuario = ?;
    `;
    const checkQuery = 'SELECT * FROM usuarios WHERE id_usuario = ?;';
    var hasUser = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);
        
        if(rows[0] == undefined){
            hasUser = false;
            return  res.send({"message": "No existe un usuario con esa id"});
        }

    });

    if (!hasUser) return;

    mysqlConnection.query(query, [nombre_usuario, nombres, apellidos, email, id], (err) => {
            if (err)
                return console.log(err);

            return res.send({ "message:": "Usuario actualizado" });

        });
}

module.exports = updateUser;