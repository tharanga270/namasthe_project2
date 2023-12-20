import React from "react";
import Typography from "@mui/material/Typography";
import { withbaby } from "../../config/Images/Images";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const NeedJoin = () => {
  return (
    <div>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 600, textAlign: "center" }}
      >
        Application
      </Typography>
      <label>Name</label>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </div>
  );
};

export default NeedJoin;
