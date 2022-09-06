import React from "react";
import memoji from "../my-memoji.png";

import {
  CardActions,
  CardContent,
  Button,
  CardMedia,
} from "@mui/material";

const IntroCard = () => {
  return (
    
    <>
      <CardContent>
        <CardMedia
          alt="A picture of my apple Memoji"
          height={memoji.height}
          component="img"
          image={memoji}
        />
      </CardContent>
      <CardActions>
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/preston-bourne-52466522b/"
          sx={{ margin: "auto" }}
          variant="outlined"
        >
          Say Hi!
        </Button>
      </CardActions>
    </>
   
  );
};

export default IntroCard;
