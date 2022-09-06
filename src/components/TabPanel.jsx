import { React, useState } from "react";
import { Tabs, Tab, Box, Grid, Card } from "@mui/material";

const TabPanel = (props) => {
  const { content, value, index } = props;
  const isSelected = value === index;

  return <>{isSelected && <Box sx={{ p: 3 }}>{content}</Box>}</>;
};

export default function CardTabs({ content }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "primary.main",
            backgroundColor: "ews"
          }}
        >
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Me 😄" />
            <Tab label="Meme 🤪" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} content={content[value]} />
        <TabPanel value={value} index={1} content={content[value]} />
      </Card>
    </Grid>
  );
}
