const dbCorredores = [];

export class CorredorDao {
    async findAll() {
        return [...dbCorredores];
    }

    async guardar(corredor) {
        const index = dbCorredores.findIndex(c => c.id === corredor.id);
        
        if (index !== -1) {
            dbCorredores[index] = { ...dbCorredores[index], ...corredor };
            return dbCorredores[index];
        } else {
            dbCorredores.push(corredor);
            return corredor;
        }
    }
}