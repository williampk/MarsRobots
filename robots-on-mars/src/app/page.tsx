"use client";
import {
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState, ChangeEvent } from "react";
import Grid from "@mui/material/Grid";

const Home: React.FC = () => {
  const defaultInputs = [
    "5 3",
    "1 1 E",
    "RFRFRFRF",
    "3 2 N",
    "FRRFLLFFRRFLL",
    "0 3 W",
    "LLFFFLFLFL",
  ];
  const INPUT_SEPARATOR = "\n";
  const [inputValue, setInputValue] = useState<string>(
    defaultInputs.join(INPUT_SEPARATOR)
  );
  const [results, setResults] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSimulate = () => {
    const data = ["ok1", "ok2"];
    setResults(data);
  };

  return (
    <Grid container spacing={2} margin={2}>
      <Grid item>
        <Typography variant="h6" gutterBottom>
          Inputs:
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          id="simulationInput"
          multiline
          rows={10}
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2, backgroundColor: "lightGrey" }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleSimulate}>
          Simulate
        </Button>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6" gutterBottom>
          Outputs:
        </Typography>
        <List>
          {results.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Home;
