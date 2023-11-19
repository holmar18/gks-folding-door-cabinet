import React from "react";
import TextField from "@mui/material/TextField";
import {Grid} from "@mui/material";

const Input = ({
  TitleText,
  size,
  type = "text",
  valueVariable = null,
  value = null,
  autoComplete = null,
}) => {
  console.log(valueVariable);
  return (
    <Grid item xs={size} mt={2}>
      <TextField
        onChange={
          valueVariable !== null
            ? (e) => valueVariable[1](e, valueVariable[2])
            : null
        }
        id='standard-basic'
        label={TitleText}
        variant='standard'
        fullWidth={true}
        type={type}
        defaultValue={value ? value : ""}
        autoComplete={autoComplete}
      />
    </Grid>
  );
};

export default Input;
