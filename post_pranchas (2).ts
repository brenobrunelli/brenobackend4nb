// src/controllers/PranchasController.ts
export class PranchasController {
    static async createPrancha(req: Request, res: Response): Promise<Response> {
        const { quantidade, tamanho, cor } = req.body;
        if (!quantidade || !tamanho || !cor) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }
        const newPrancha = await PranchasService.createPrancha({ quantidade, tamanho, cor });
        return res.status(201).json(newPrancha);
    }
}

// src/routes/pranchas.routes.ts
pranchasRoutes.post('/pranchas', PranchasController.createPrancha);
