import React, { useState, useEffect } from "react";
import axios from "axios";

import { CardActions, CardContent, Button, CardMedia } from "@mui/material";

const MemeCard = () => {
  const [meme, setMeme] = useState({
    name: "Hide The Pain Harold",
    url: "https://i.imgflip.com/gk5el.jpg"
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      if (allMemes.length > 0) return;
      console.log("fetching meme data");
      const res = await axios("https://api.imgflip.com/get_memes");
      console.log(res)
      const memeData = res.data.data.memes;
      setAllMemes(memeData);
    }
    getMemes();
  }, []);

  function chooseMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const { url, name } = allMemes[randomNumber];
    setMeme((prevMeme) => ({
      ...prevMeme,
      name,
      url
    }));
  }

  return (
    <>
      <CardContent>
        <CardMedia alt={meme.name} component="img" image={meme.url} />
      </CardContent>
      <CardActions>
        <Button onClick={chooseMeme} sx={{ margin: "auto" }} variant="outlined">
          {meme.name}
        </Button>
      </CardActions>
    </>
  );
};

export default MemeCard;
