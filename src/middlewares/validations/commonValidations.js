import { BadRequestError } from '../errors/customError.js';

export const validateId = (req, res, next) => {
    const id = parseInt(req.params.id);
    
    if (isNaN(id) || id <= 0) {
        throw new BadRequestError('ID inválido');
    }
    
    req.params.id = id;
    next();
};

export const validatePagination = (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (page < 1) {
        throw new BadRequestError('El número de página debe ser mayor a 0');
    }

    if (limit < 1 || limit > 100) {
        throw new BadRequestError('El límite debe estar entre 1 y 100');
    }

    req.pagination = {
        page,
        limit,
        offset: (page - 1) * limit
    };

    next();
};

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const requireFields = (...fields) => {
    return (req, res, next) => {
        const missingFields = fields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            throw new BadRequestError(
                `Campos requeridos faltantes: ${missingFields.join(', ')}`
            );
        }
        
        next();
    };
};