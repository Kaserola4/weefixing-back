const mysqlConnection = require('../../database/db');

const getOfferData = (res) => {

    const query = `
    SELECT 
        ofertas.id_oferta, productos.nombre,
        ofertas.descripcion, ofertas.descuento,
        ROUND(productos.precio * ( 1 - ofertas.descuento / 100)) AS precio, ofertas.fecha,
        ofertas.duracion, productos.ruta_imagen
    FROM ofertas
    JOIN productos 
        ON ofertas.id_producto = productos.id_producto;
    `;

    mysqlConnection.query(query, (err, rows) => {
        if (err) return console.log(err);
        
        if (rows[0] === undefined) return res.send({"message": "No hay ofertas"});
        return res.send(rows);  
    });

}

module.exports = getOfferData;