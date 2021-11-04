const mysqlConnection = require('../../../database/db');

const getPrimaryCategory = (req, res) => {
    const { id } = req.params;
    let query = (id == 0) ?
        'SELECT * FROM categorias_primarias;' : 'SELECT * FROM categorias_primarias WHERE id_categoria = ?;';

    mysqlConnection.query(query, [id], (err, rows) => {
        if (err) return console.log(err);

        if(rows[0] == undefined)
           return  res.json({"message": "No existe una categoría con esa id"});
            
        return res.json({ rows });
        
    });
}

module.exports = getPrimaryCategory;