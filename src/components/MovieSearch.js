import { Grid } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function MovieSearch({ setSearchResult }) {
  const [text, setText] = useState("");
  const apiKey = "918ef6cfd3c244a05980a5a2c2634c69";
  const clickHandler = async () => {
    if (text.length > 1) {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`
        )
        .then((result) => {
          console.log(result.data.results);
          setSearchResult(result.data.results);
        });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} rowSpacing={3}>
        <input onChange={(x) => setText(x.target.value)} />
        <button onClick={() => clickHandler()}>Submit</button>
      </Grid>
    </Grid>
  );
}
