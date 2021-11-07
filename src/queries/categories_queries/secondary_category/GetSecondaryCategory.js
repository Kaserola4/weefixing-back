const mysqlConnection = require('../../../database/db');

const getSecondaryCategory = (req, res) => {
    const { id } = req.params;
    let query = (id == 0) ?
        'SELECT * FROM categorias_secundarias;' : 'SELECT * FROM categorias_secundarias WHERE id_categoria = ?;';

    mysqlConnection.query(query, [id], (err, rows) => {
        if (err) return console.log(err);

        if(rows[0] == undefined)
           return  res.send({"message": "No existe una categoría con esa id"});
            
        return res.send({ rows });
        
    });
}

module.exports = getSecondaryCategory;