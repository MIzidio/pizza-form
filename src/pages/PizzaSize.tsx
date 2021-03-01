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
  size: string;
}

const sizes = [
  { label: "Mini (4 pedaços)", value: "mini", id: 1 },
  { label: "Pequena (6 pedaços)", value: "pequena", id: 2 },
  { label: "Média (8 pedaços)", value: "media", id: 3 },
  { label: "Grande (10 pedaços)", value: "grande", id: 4 },
];

const PizzaSize: React.FC<{}> = () => {
  const { state, actions } = useStateMachine({ updateAction });
  const { register, handleSubmit } = useForm<FormValues>();
  const [value, setValue] = useState<string>(state.pizza.size);
  const { push } = useHistory();
  const onSubmit = (data: FormValues) => {
    actions.updateAction(data);
    push("/step2");
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
        <h2>Escolha o tamanho da pizza</h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">Tamanhos</FormLabel>
          <RadioGroup name="size" value={value} onChange={handleChange}>
            {sizes.map((size) => (
              <FormControlLabel
                value={size.value}
                control={<Radio required />}
                label={size.label}
                inputRef={register}
                key={size.id}
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

export default PizzaSize;
