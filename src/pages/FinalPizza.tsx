import React from "react";
import { useStateMachine } from "little-state-machine";
import { clearAction } from "../actions/clearAction";
import { updateAction } from "../actions/updateAction";
import { useHistory } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const FinalPizza: React.FC<{}> = () => {
  const { state, actions } = useStateMachine({ clearAction, updateAction });
  const { push } = useHistory();
  const onClick = (data: any) => {
    actions.clearAction(data);
    push("/");
  };
  const onClickBack = () => {
    actions.updateAction({ points: 0 });
    push("/");
  };

  return (
    <Container maxWidth='xs'>
        <h2>Sua pizza ficou assim:</h2>
      <List component="nav" dense>
        <ListItem>
          <ListItemText primary={`Tamanho: ${state.pizza.size}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Borda: ${state.pizza.border}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Sabor: ${state.pizza.taste}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Pontos de benefício ganhos: ${state.pizza.points}`}
          />
        </ListItem>
      </List>
      <Button variant="contained" onClick={onClick} color="primary">
        Confirmar
      </Button>
      <Button variant="contained" onClick={onClickBack} color="primary">
        Remontar
      </Button>
    </Container>
  );
};

export default FinalPizza;
