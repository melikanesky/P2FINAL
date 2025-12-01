// Exportar todos los middlewares desde un solo punto
export { errorHandler } from './errors/ErrorHandler.js';
export { notFound } from './errors/notFound.js';
export { asyncHandler } from './errors/AsyncHandler.js';
export { 
    CustomError, 
    NotFoundError, 
    BadRequestError, 
    UnauthorizedError, 
    ForbiddenError,
    ValidationError 
} from './errors/CustomError.js';

export { 
    validateRequest, 
    validateParams, 
    validateQuery 
} from './validations/validateRequest.js';

export { 
    sanitizeInput, 
    preventNoSQLInjection 
} from './validations/sanitize.js';

export { 
    validateId, 
    validatePagination, 
    isValidEmail, 
    requireFields 
} from './validations/commonValidations.js';