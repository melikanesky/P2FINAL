import { ValidationError } from '../errors/CustomError.js';

// Middleware genérico para validar request body
export const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });

        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            throw new ValidationError(errorMessages.join(', '));
        }

        req.body = value;
        next();
    };
};

// Validar parámetros de ruta
export const validateParams = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.params, {
            abortEarly: false
        });

        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            throw new ValidationError(errorMessages.join(', '));
        }

        req.params = value;
        next();
    };
};

// Validar query strings
export const validateQuery = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.query, {
            abortEarly: false
        });

        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            throw new ValidationError(errorMessages.join(', '));
        }

        req.query = value;
        next();
    };
};