// import { Document, model, Schema } from "mongoose";

// interface HistoricInterface extends Document {
//   idTransition: string;
//   originCurrency: string;
//   originValue: number;
//   destinationCurrency: string;
//   destinationValue: string;
//   conversionRate: number;
//   idUser: string;
// }

// const HistoricSchema = new Schema({
//   idUser: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   idTransition: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   originCurrency: { // moeda do pais
//     type: String,
//     required: true,
//   },
//   originValue: { // valor a ser convertido
//     type: Number,
//     required: true,
//   },
//   destinationCurrency: { // moeda que vai virar a ser convertido
//     type: String,
//   },
//   destinationValue: {
//     type: Number,
//   },
//   conversionRate: { // taxa de conversao
//     type: Number,
//   },
//   create_date: {
//     type: Date,
//   }
//   //uptadeAt
//   //createdAt
// }, {
//   // criar uptadeAt end createdAt
//   timestamps: true,
// })

// export default model<HistoricInterface>("Historic", HistoricSchema);
