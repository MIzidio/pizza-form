import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../actions/updateAction";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

interface pieceType {
    label: string;
    value: string;
}
interface TodayPizzaType {
    size: pieceType;
    border: pieceType;
    taste: pieceType;
    points: number;
}

const PizzaOfTheDay: React.FC<{}> = () => {
  const { actions } = useStateMachine({ updateAction });
  const [todayPizza, setTodayPizza] = useState<TodayPizzaType | null>(null);
  const { push } = useHistory();

  const onSelectTodaysPizza = () => {
    actions.updateAction({
      size: todayPizza?.size.value,
      border: todayPizza?.border.value,
      taste: todayPizza?.taste.value,
      points: todayPizza?.points,
    });
    push("/result");
  };
  const onContinue = () => {
    push("/step1");
  };

  const getData = async () => {
      const data = await fetch('http://localhost:8000/day');
      const result = await data.json();
      setTodayPizza(result);
  }

  useEffect(() => {
     getData();
  }, [])

  return (
    <Container maxWidth='xs'>
      <h2>Pizza do dia:</h2>
      <List component="nav" dense>
        <ListItem>
          <ListItemText primary={`Tamanho: ${todayPizza?.size.label}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Borda: ${todayPizza?.border.label}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Sabor: ${todayPizza?.taste.label}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Pontos de benefício ganhos: ${todayPizza?.points}`}
          />
        </ListItem>
      </List>
      <Button variant="contained" onClick={onSelectTodaysPizza} color="primary">
        Quero essa!
      </Button>
      <Button variant="contained" onClick={onContinue} color="secondary">
        Quero montar
      </Button>
    </Container>
  );
};

export default PizzaOfTheDay;
