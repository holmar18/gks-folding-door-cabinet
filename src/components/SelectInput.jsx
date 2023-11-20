import React from "react";
import {FormControl, InputLabel, Select, MenuItem, Grid} from "@mui/material";

const SelectInput = ({values, update, changeLabel, label, size = 12}) => {
  return (
    <Grid item xs={size} mt={2}>
      <FormControl fullWidth variant='standard'>
        <InputLabel id='demo-simple-select-standard-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          label={label}
          onChange={(e) => update(e, changeLabel, "value")}>
          {values.map((ele) => {
            return <MenuItem value={ele}>{ele}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectInput;
