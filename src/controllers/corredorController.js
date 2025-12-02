import { CorredorFactory } from '../business/factories/corredorFactory.js';

export const postCorredor = async (req, res) => {
    try {
        const useCase = CorredorFactory.getRegistrarPosicionUseCase();

        const resultado = await useCase.ejecutar(req.body);

        res.status(200).json(resultado);

    } catch (error) {
        console.error(error);
        const status = error.statusCode || 500;
        
        res.status(status).json({ 
            errorMsg: error.message || "Error interno del servidor" 
        });
    }
};