import { CardProps } from "../../interfaces/card.interface";
import { CardUser, Data, Label } from "./styles";

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <CardUser>
      <Label>Nome:</Label>
      <Data>{name}</Data>
      <Label>Idade:</Label>
      <Data>{age}</Data>
      <Label>Hobby:</Label>
      <Data>{hobby}</Data>
    </CardUser>
  );
};

export default Card;
