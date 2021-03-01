import React, { useState } from "react";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../actions/updateAction";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

interface FormValues {
  taste: string;
}

const tastes = [
  { label: "Frango", value: "frango", id: 1 },
  { label: "Carne", value: "carne", id: 2 },
  { label: "Mussarela", value: "mussarela", id: 3 },
  { label: "Calabresa", value: "calabresa", id: 4 },
];

const PizzaTaste: React.FC<{}> = () => {
  const { state, actions } = useStateMachine({ updateAction });
  const { register, handleSubmit } = useForm<FormValues>();
  const [value, setValue] = useState<string>(state.pizza.taste);
  const { push } = useHistory();
  const onSubmit = (data: FormValues) => {
    actions.updateAction(data);
    push("/result");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  const onClickBack = () => {
    push("/step1");
  };

  return (
    <Container maxWidth='xs'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Escolha o sabor da pizza</h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">Bordas</FormLabel>
          <RadioGroup name="taste" value={value} onChange={handleChange}>
            {tastes.map((taste) => (
              <FormControlLabel
                value={taste.value}
                control={<Radio required />}
                label={taste.label}
                inputRef={register}
                key={taste.id}
              />
            ))}
          </RadioGroup>
          <Button type="submit" variant="contained" color="primary">
            Próximo
          </Button>
          <Button onClick={onClickBack} variant="contained" color="primary">
            Voltar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default PizzaTaste;
