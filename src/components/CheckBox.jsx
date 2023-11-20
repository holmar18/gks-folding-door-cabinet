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
}) => {
  return (
    <Grid item xs={size} mt={mt}>
      <FormControlLabel
        label={TitleText}
        control={
          <Checkbox
            disabled={isDisabled}
            onChange={update ? (e) => update(e, changeLabel, "checked") : null}
          />
        }
      />
    </Grid>
  );
};

export default CheckBox;
