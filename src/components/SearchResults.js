import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

export default function SearchResults({ searchResults, setCurrentMovieID }) {
  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      {searchResults.map((result, idx) => {
        return (
          <Grid item key={idx} xs={4}>
            <MovieCard result={result} setCurrentMovieID={setCurrentMovieID} />
          </Grid>
        );
      })}
    </Grid>
  );
}
