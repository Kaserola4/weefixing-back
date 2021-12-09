const { sign, verify } = require('jsonwebtoken');

const createToken = (body) => {
    const payload = {
        "id_usuario": body.id_usuario,
        "id_carrito": body.id_carrito,
        "email": body.nombre_usuario
    }

    const accessToken = sign(payload, process.env.JWT_KEY);

    return accessToken;
}

// Middleware para la validación del Token
const validateToken = (req, res, next) => {
    // Se obtiene la cookie acess-token del request
    const accessToken = req.cookies["access-token"];

    if (!accessToken)
        return res.status(400).json({"message": "Usuario no autenticado"});

    try {
        // Verificamos que el token obtenido sea válido
        const validToken = verify(accessToken, process.env.JWT_KEY);
        
        if (validToken){
            req.authenticated = true;
            return next();
        }
        
    } catch (err) {
        return res.status(400).json({"message": "error", "error": err});
    }
}

module.exports = { createToken, validateToken };