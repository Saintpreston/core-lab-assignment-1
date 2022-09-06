import React from "react";
import { Typography, Link, Grid, Box } from "@mui/material";

const Introduction = ({ name }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Typography gutterBottom variant="h3">
        Hello, I'm{" "}
        <Box component="span" color="primary.main">
          {name}
        </Box>
        😄
      </Typography>
      <Typography>
        I’m passionate about creating pleasant experiences between humans and
        software. Right now I’m working on my BFA in Design Technology at
        Parsons School of Design in NYC.
      </Typography>
      <Typography>
        One of my faovorite things to do is find chill picnic spots, I really
        want to visit{" "}
        <Link href="https://www.theruin.org/" target="_blank">
          Renwick Hospital
          <Box role="img" aria-label="ghost" component="span">
            👻
          </Box>
        </Link>
      </Typography>
    </Grid>
  );
};

export default Introduction;