import { Document, model, Schema } from "mongoose";

interface UserInterface extends Document {
  originCurrency: string;
  originValue: number;
  destinationCurrency?: string;
  conversionRate?: number;
  idUser: string;
}

const UserSchema = new Schema({
  idUser: {
    type: String,
    required: true,
    unique: true,
  },
  originCurrency: { // moeda do pais
    type: String,
    required: true,
  },
  originValue: { // valor a ser convertido
    type: Number,
    required: true
  },
  destinationCurrency: { // moeda que vai virar a ser convertido
    type: String
  },
  conversionRate: { // taxa de conversao
    type: Number
  },
  //uptadeAt
  //createdAt
}, {
  // criar uptadeAt end createdAt
  timestamps: true,
})

export default model<UserInterface>("User", UserSchema);
