import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../actions/updateAction";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

interface FormValues {
  border: string;
}

const borders = [
  { label: "Sem recheio", value: "sem recheio", id: 1 },
  { label: "Recheio de chocolate", value: "chocolate", id: 2 },
  { label: "Recheio de catupiry", value: "catupiry", id: 3 },
  { label: "Recheio de cream cheese", value: "cream cheese", id: 4 },
];

const PizzaBorder: React.FC<{}> = () => {
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm<FormValues>();
  const [value, setValue] = useState<string>(state.pizza.border);
  const { push } = useHistory();

  const onSubmit = (data: FormValues) => {
    actions.updateAction(data);
    push("/step3");
  };
  const onClickBack = () => {
    push("/step1");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  return (
    <Container maxWidth='xs'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='h5'>Borda da Pizza</Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Bordas</FormLabel>
          <RadioGroup name="border" value={value} onChange={handleChange}>
            {borders.map((border) => (
              <FormControlLabel
                value={border.value}
                control={<Radio required />}
                label={border.label}
                inputRef={register}
                key={border.id}
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

export default PizzaBorder;
