import { Router } from 'express';
import { postCorredor } from '../controllers/corredorController.js';

import { sanitizeInput } from '../middlewares/sanitize.js';
import { validateBodyCorredor } from '../middlewares/validatorCorredor.js';

const router = Router();

router.post('/', 
    sanitizeInput, 
    validateBodyCorredor, 
    postCorredor
);

export default router;