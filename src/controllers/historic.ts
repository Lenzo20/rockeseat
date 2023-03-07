import { Response } from 'express';
import { v4 as uuidv4 } from "uuid";

import Historic from "../model/Historic";

export async function historic(res: Response, value: Array<Object>) {
  try {
    let transactionId = uuidv4();

    const idTest = await Historic.findOne({ idTransition: transactionId });

    if (idTest) {
      transactionId = uuidv4();
    }

    value.push({ "idTransition": transactionId })

    // value.map((value) => {
    //   console.log(value)
    // })

    const { idUser } = value

    const hist = await Historic.create({ value })

    console.log(hist)
  } catch (err) {
    return res.json(err.message)
  }

}
