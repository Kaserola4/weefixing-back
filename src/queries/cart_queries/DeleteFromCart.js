const mysqlConnection = require("../../database/db")

const deleteFromCart = (req, res) => {
    const query = `
    SET @id_carrito = ?;
    SET @id_producto = ?;
    SET @id_usuario = ?;
    UPDATE usuarios SET id_carrito = NULL WHERE id_usuario = @id_usuario;
    DELETE FROM carritos WHERE (id_carrito = @id_carrito) AND (id_producto = @id_producto);
    `;
    const checkProductOnCartQuery = 'SELECT id_carrito FROM carritos WHERE id_carrito = ? and id_producto = ?;'
    const checkQuery = 'SELECT COUNT(id_carrito) AS count FROM carritos WHERE id_carrito = ?;';

    const { id_usuario, id_carrito } = req.body;

    var hasCart = true;
    var hasProductOnCart = true;

    mysqlConnection.query(checkQuery, [id_carrito], (err, rows) => {
        if (err) return console.log(err);

        if (rows[0].count === 0) {
            hasCart = false
            return res.send({ "message": "Ha fallado la eliminación, sin carrito" });
        }

        if (!hasCart) return;

        mysqlConnection.query(checkProductOnCartQuery, [id_carrito, req.body.id_producto[0]], (err, rows) => {
            if (err) return console.log(err);

            if (rows[0] === undefined) {
                hasProductOnCart = false
                return res.send({ "message": "No existe ese producto en este carrito" });
            }

            if (!hasProductOnCart) return;

            req.body.id_producto.map((id_producto) => {
                mysqlConnection.query(query, [id_carrito, id_producto, id_usuario], (err) => {
                    if (err)
                        return console.log(err);
                });
            });

            return res.send({"message": "Producto eliminado exitosamente del carrito, si es el ultimo producto, se ha eliminado el carrito"});
        });
    });

}

module.exports = deleteFromCart;