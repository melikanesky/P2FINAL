export class RegistrarPosicionUseCase {
    
    constructor(corredorDao, mailService) {
        this.corredorDao = corredorDao;
        this.mailService = mailService;
    }

    async ejecutar(datos) {
        const { id, latitud, longitud } = datos;

        const corredorGuardado = await this.corredorDao.guardar({ id, latitud, longitud });

        const todos = await this.corredorDao.findAll();
        const alertas = [];

        for (const otro of todos) {
            if (otro.id !== id) {
                const distancia = this.calcularHaversine(latitud, longitud, otro.latitud, otro.longitud);

                if (distancia < 50) {
                    const mensajeAlerta = `El corredor ${id} está a ${Math.round(distancia)}m de ${otro.id}`;
                    
                    alertas.push(mensajeAlerta);
                    
                    await this.mailService.enviarAlerta(mensajeAlerta);
                }
            }
        }

        return {
            mensaje: "Operación exitosa",
            datos: corredorGuardado,
            alertas: alertas
        };
    }

    calcularHaversine(lat1, lon1, lat2, lon2) {
        const R = 6371000; // Radio terrestre
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = 
            Math.sin(dLat/2) ** 2 +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
}