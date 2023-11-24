import React from "react";
import TextField from "@mui/material/TextField";
import {Grid} from "@mui/material";

const Input = ({
  TitleText,
  size,
  type = "text",
  defaultValue = null,
  autoComplete = null,
  update = null,
  changeLabel = "",
}) => {
  return (
    <Grid item xs={size} mt={2}>
      <TextField
        onChange={
          update !== null ? (e) => update(e, changeLabel, "value") : null
        }
        id='standard-basic'
        label={TitleText}
        variant='standard'
        fullWidth={true}
        type={type}
        defaultValue={defaultValue ? defaultValue : ""}
        autoComplete={autoComplete}
      />
    </Grid>
  );
};

export default Input;
