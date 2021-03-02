import React, { useEffect, useState } from "react";
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

interface TasteType {
  label: string;
  value: string;
  id: number;
}

const PizzaTaste: React.FC<{}> = () => {
  const { state, actions } = useStateMachine({ updateAction });
  const { register, handleSubmit } = useForm<FormValues>();
  const [value, setValue] = useState<string>(state.pizza.taste);
  const [tastes, setTastes] = useState<TasteType[] | null>(null);
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

  const getData = async () => {
    const data = await fetch("http://localhost:8000/taste");
    const result = await data.json();
    setTastes(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Escolha o sabor da pizza</h2>
        <FormControl component="fieldset">
          <FormLabel component="legend">Bordas</FormLabel>
          <RadioGroup name="taste" value={value} onChange={handleChange}>
            {tastes?.map((taste) => (
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
