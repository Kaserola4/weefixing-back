const mysqlConnection = require('../../database/db');

const getOffer = (req, res) => {
    const { id } = req.params;

    let query = (id == 0) ?
        'SELECT * FROM ofertas;' : 'SELECT * FROM ofertas WHERE id_oferta = ?;';

    mysqlConnection.query(query, [id], (err, rows) => {
        if (err) return console.log(err);

        if(rows[0] === undefined)
           return  res.send({"message": "La oferta no existe"});
        
        return res.send({ rows });
    });
}

module.exports = getOffer;