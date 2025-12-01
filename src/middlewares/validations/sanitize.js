// Middleware para sanitizar inputs
export const sanitizeInput = (req, res, next) => {
    // Sanitizar body
    if (req.body) {
        req.body = sanitizeObject(req.body);
    }

    // Sanitizar query
    if (req.query) {
        req.query = sanitizeObject(req.query);
    }

    next();
};

// Función auxiliar para sanitizar objetos
const sanitizeObject = (obj) => {
    const sanitized = {};
    
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'string') {
            // Remover espacios extra y tags HTML básicos
            sanitized[key] = value.trim().replace(/<[^>]*>/g, '');
        } else if (typeof value === 'object' && value !== null) {
            sanitized[key] = sanitizeObject(value);
        } else {
            sanitized[key] = value;
        }
    }
    
    return sanitized;
};

// Middleware para prevenir inyección NoSQL
export const preventNoSQLInjection = (req, res, next) => {
    const checkForInjection = (obj) => {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (key.startsWith('$')) {
                    throw new Error('Operador NoSQL no permitido');
                }
                checkForInjection(obj[key]);
            }
        }
    };

    if (req.body) checkForInjection(req.body);
    if (req.query) checkForInjection(req.query);
    if (req.params) checkForInjection(req.params);

    next();
};