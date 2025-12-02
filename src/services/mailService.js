export class MailService {
    async enviarAlerta(mensaje) {
        console.log(`[MAIL SERVICE] 📧 Enviando correo: "${mensaje}"`);
        return true;
    }
}