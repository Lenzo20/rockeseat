import { Request, Response } from "express";

import User from "../model/User"

import { conversor } from "./apiConversor";

class UserController {
  public async index(req: Request, res: Response) {
    const users = await User.find();

    return { users };
  }

  public async create(req: Request, res: Response) {
    const { originCurrency, originValue, destinationCurrency } = req.body;


    if (!originCurrency)
      return res.status(400).json({ error: "Origin currencyl is required" });

    if (!originValue)
      return res.status(400).json({ error: "originValue is required" });

    if (!destinationCurrency)
      return res.status(400).json({ error: "destinationCurrency is required" });


    function generateUserId() {
      const userIdLength = 14;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let userId = '';

      for (let i = 0; i < userIdLength; i++) {
        userId += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      return userId;
    }

    const idUser = generateUserId();

    const users = await User.create({
      idUser,
      originCurrency,
      originValue,
      destinationCurrency,
    })

    const result = await conversor(req, res, req.body, users.idUser);
    return res.json(result);
  }
}

export default new UserController();
