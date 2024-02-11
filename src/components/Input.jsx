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
  multiline = false,
  rows = 1,
  id = "",
  variant = "standard",
  onBlur = undefined,
  onFocus = undefined,
}) => {
  return (
    <Grid item xs={size} mt={2}>
      <TextField
        onChange={
          valueVariable !== null
            ? (e) => valueVariable[1](e, valueVariable[2], "value")
            : null
        }
        id={id ? id : "standard-basic"}
        label={TitleText}
        variant={variant}
        fullWidth={true}
        type={type}
        defaultValue={value ? value : ""}
        autoComplete={autoComplete}
        multiline={multiline}
        rows={rows}
        onBlur={() => (onBlur ? onBlur(false) : undefined)}
        onFocus={() => (onFocus ? onFocus(true) : undefined)}
      />
    </Grid>
  );
};

export default Input;
