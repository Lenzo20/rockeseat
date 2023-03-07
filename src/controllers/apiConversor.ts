import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import User from "../model/User";

interface bodyInterface extends Document {
  originCurrency: string;
  originValue: number;
  destinationCurrency: string;
}

export async function conversor(req: Request, res: Response, body: bodyInterface, id: string): Promise<Object> {
  const { originCurrency, originValue, destinationCurrency } = body;

  function getCountryCode(country) {
    const countryCodes = {
      "Brasil": "BRL",
      "Portugal": "EUR",
      "Estados Unidos": "USD",
      "Japão": "JPY",
    };
    return countryCodes[country];
  }
  const origin = getCountryCode(originCurrency);
  const destination = getCountryCode(destinationCurrency);

  const url: string = `https://economia.awesomeapi.com.br/${origin}-${destination}/1`

  const response = await fetch(url);

  const data = await response.json();

  const high: number = data[0].high;

  const newValor = originValue * high || 0;
  const date = data[0].create_date;

  const array = [
    { "Id User": id },
    { "Origin Urrency": originCurrency },
    { "Origin Value": originValue },
    { "Destination Currency": destinationCurrency },
    { "Destination Value": newValor },
    { "Date/Hour": date }
  ]

  let transactionId = uuidv4();

  const idTest = await User.findOne({ idTransition: transactionId });

  if (idTest) {
    transactionId = uuidv4();
  }

  const newArray: Array<object> = array;

  newArray.push({ "Transaction Id": transactionId })

  return { newArray };
}
