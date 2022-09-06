import * as React from "react";
import { AppBar, Toolbar, Switch, FormControlLabel } from "@mui/material";

const Navigation = ({ mode, themeChange }) => {
  return (
    <AppBar>
      <Toolbar>
        <FormControlLabel
          label={mode.type}
          control={<Switch color="secondary" onChange={themeChange} />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
