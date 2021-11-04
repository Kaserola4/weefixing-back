const mysqlConnection = require('../../database/db');

const deleteUser = (req, res) => {
    const { id } = req.params;

    const query = `
    SELECT id_usuario FROM usuarios WHERE id_usuario = ? INTO @id_usuario;
    SELECT id_carrito FROM usuarios WHERE id_usuario = @id_usuario INTO @id_carrito_delete;
    DELETE FROM usuarios WHERE id_usuario = @id_usuario;
    DELETE FROM carritos WHERE id_carrito = @id_carrito_delete;
    `;
    const checkQuery = 'SELECT * FROM usuarios WHERE id_usuarios = ?;';
    let hasUser = true;

    mysqlConnection.query(checkQuery, [id], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0] == undefined)
            return res.json({ "message": "No existe un usuario con esa id" });
        hasUser = false;

    });

    if (!hasUser) return;


    mysqlConnection.query(query, [id], (err) => {
        if (err) return console.log(err);

        return res.json({ "message": "Usuario eliminado exitosamente" });


    });
}

module.exports = deleteUser;