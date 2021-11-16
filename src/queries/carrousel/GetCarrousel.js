const mysqlConnection = require('../../database/db');

const getCarrousel = (req, res) => {
    const { id } = req.params;

    let query = (id == 0) ?
        'SELECT * FROM carrusel;' : 'SELECT * FROM carrusel WHERE id_carrusel = ?;';

    mysqlConnection.query(query, [id], (err, rows) => {
        if (err) return console.log(err);

        if(rows[0] === undefined)
           return  res.send({"message": "No existe un carrusel con esa id"});
        
        return res.send({ rows });
    });
}

module.exports = getCarrousel;