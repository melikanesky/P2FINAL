import { CorredorDao } from '../../data/daos/corredorDao.js';
import { MailService } from '../../services/mailService.js';
import { RegistrarPosicionUseCase } from '../useCases/registrarPosicionUseCase.js';

const corredorDao = new CorredorDao();
const mailService = new MailService();

export class CorredorFactory {
    static getRegistrarPosicionUseCase() {
        return new RegistrarPosicionUseCase(corredorDao, mailService);
    }
}