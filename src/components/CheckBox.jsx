import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckBox = ({
  TitleText,
  size,
  mt = 2,
  isDisabled = false,
  update = null,
  changeLabel = "",
  value = undefined,
}) => {
  return (
    <Grid item xs={size} mt={mt}>
      <FormControlLabel
        label={TitleText}
        value={value}
        control={
          <Checkbox
            checked={value}
            value={value}
            disabled={isDisabled}
            onChange={update ? (e) => update(e, changeLabel, "checked") : null}
          />
        }
      />
    </Grid>
  );
};

export default CheckBox;
