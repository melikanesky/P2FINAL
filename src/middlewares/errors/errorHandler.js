// Middleware de manejo de errores centralizado
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error interno del servidor';

    console.error(`[ERROR] ${statusCode}: ${message}`, {
        stack: err.stack,
        path: req.path,
        method: req.method
    });

    res.status(statusCode).json({
        success: false,
        error: {
            message,
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};