// Clase para errores personalizados
export class CustomError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// Errores específicos comunes
export class NotFoundError extends CustomError {
    constructor(message = 'Recurso no encontrado') {
        super(message, 404);
    }
}

export class BadRequestError extends CustomError {
    constructor(message = 'Solicitud inválida') {
        super(message, 400);
    }
}

export class UnauthorizedError extends CustomError {
    constructor(message = 'No autorizado') {
        super(message, 401);
    }
}

export class ForbiddenError extends CustomError {
    constructor(message = 'Acceso prohibido') {
        super(message, 403);
    }
}

export class ValidationError extends CustomError {
    constructor(message = 'Error de validación') {
        super(message, 422);
    }
}