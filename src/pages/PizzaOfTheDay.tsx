import React from "react";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../actions/updateAction";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const TodayPizza = {
  size: { label: "Grande (10 pedaços)", value: "grande" },
  border: { label: "Recheio de chocolate", value: "chocolate" },
  taste: { label: "Frango", value: "frango" },
  points: 100,
};

const PizzaOfTheDay: React.FC<{}> = () => {
  const { actions } = useStateMachine({ updateAction });
  const { push } = useHistory();

  const onSelectTodaysPizza = () => {
    actions.updateAction({
      size: TodayPizza.size.value,
      border: TodayPizza.border.value,
      taste: TodayPizza.taste.value,
      points: TodayPizza.points,
    });
    push("/result");
  };
  const onContinue = () => {
    push("/step1");
  };

  return (
    <Container maxWidth='xs'>
      <h2>Pizza do dia:</h2>
      <List component="nav" dense>
        <ListItem>
          <ListItemText primary={`Tamanho: ${TodayPizza.size.label}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Borda: ${TodayPizza.border.label}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Sabor: ${TodayPizza.taste.label}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Pontos de benefício ganhos: ${TodayPizza.points}`}
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
