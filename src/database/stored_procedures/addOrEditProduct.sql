CREATE DEFINER=`root`@`localhost` PROCEDURE `addOrEditProduct`(
		IN _id_producto INT,
		IN _sku VARCHAR(45),
		IN _nombre VARCHAR(60),
		IN _descripcion TEXT,
		IN _categoria_primaria INT,
		IN _categoria_secundaria INT,
		IN _precio DOUBLE,
		IN _stock INT,
		IN _fecha DATE,
		IN _calificacion FLOAT,
        IN _ruta_imagen VARCHAR(90)
        )
BEGIN
	IF _id_producto = 0 THEN
		INSERT INTO productos
		VALUES 
			(_id_producto,
			_sku,
			_nombre,
			_descripcion,
			_categoria_primaria,
			_categoria_secundaria,
			_precio,
			_stock,
			_fecha,
			_calificacion,
            _ruta_imagen
			);
		SET _id_producto = LAST_INSERT_ID();
		ELSE
			UPDATE productos 
				SET
					id_producto = _id_producto,
					sku = _sku,
					nombre = _nombre,
					descripcion = _descripcion,
					categoria_primaria = _categoria_primaria,
					categoria_secundaria = _categoria_secundaria ,
					precio = _precio,
					stock = _stock,
					fecha = _fecha,
					calificacion = _calificacion,
                    ruta_imagen = _ruta_imagen

				WHERE id_producto = _id_producto;
		END IF;
		SELECT _id_producto AS id_producto;
END