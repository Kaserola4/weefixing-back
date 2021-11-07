const mysqlConnection = require('../../database/db');

const getUser = (req, res) => {
    const { id } = req.params;
    let query = (id == 0) ?
        'SELECT * FROM usuarios;' : 'SELECT * FROM usuarios WHERE id_usuario = ?;';

    mysqlConnection.query(query, [id], (err, rows) => {
        if (err) return console.log(err);

        if(rows[0] == undefined)
           return  res.send({"message": "No existe un usuario con esa id"});
            
        return res.send({ rows });
        
    });
}

module.exports = getUser;