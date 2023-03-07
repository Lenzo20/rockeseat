import { Request, Response } from "express"
import Redis from "ioredis";

import userController from "../controllers/userController";

class redisController {

  public async index(req: Request, res: Response) {
    const redis = new Redis();

    //  Busca no redis (cache) se existe algo
    const cacheUsers = await redis.get('coin');

    //  Se não existir nada ele busca no banco principal e salva o valor no cache
    if (!cacheUsers) {
      // aqui vai pro banco de dados
      const { users } = await userController.index(req, res)

      // Salvar o valor do bd main no cache
      await redis.set('coin', JSON.stringify(users), 'EX', 30);

      console.log('.\x1b[35m%s\x1b[0m', 'From Database');
      return res.json(users);

    } else {
      console.log('.\x1b[36m%s\x1b[0m', 'From Cache');
      const cacheUsersJson = JSON.parse(cacheUsers)
      return res.send(cacheUsersJson);
    }
  }
}

export default new redisController();
