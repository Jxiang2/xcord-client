import React from 'react';
import {styled} from "@mui/material";
import {IInputLabelPropsType} from "../react-app-env";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%"
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px"
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "7.5px",
  color: "black",
  background: "#3539f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px"
});

const InputLabel = (props: IInputLabelPropsType) => {
  const {value, setValue, label, type, promptText} = props;

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={promptText}
      />
    </Wrapper>
  );
};

export default InputLabel;