
import { BadRequestError } from './errors/customError.js'; 

export const validateBodyCorredor = (req, res, next) => {
    const { id, latitud, longitud } = req.body;

    if (!id) throw new BadRequestError("Falta el campo 'id'");
    
    if (latitud === undefined) throw new BadRequestError("Falta el campo 'latitud'");
    if (longitud === undefined) throw new BadRequestError("Falta el campo 'longitud'");

    if (typeof latitud !== 'number' || typeof longitud !== 'number') {
        throw new BadRequestError("Latitud y Longitud deben ser números");
    }

    next();
};