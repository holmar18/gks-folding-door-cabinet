import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckBox = ({TitleText, size, mt = 2}) => {
  return (
    <Grid item xs={size} mt={mt}>
      <FormControlLabel control={<Checkbox />} label={TitleText} />
    </Grid>
  );
};

export default CheckBox;
