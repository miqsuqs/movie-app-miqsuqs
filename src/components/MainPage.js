import { useState } from "react";
import { Container, Grid } from "@mui/material";
import MovieSearch from "./MovieSearch";
import SearchResults from "./SearchResults";

const MainPage = ({ setCurrentMovieID }) => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Container fixed>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={1}
      >
        <Grid item xs={3}>
          <MovieSearch setSearchResult={setSearchResult} />
        </Grid>

        <Grid item xs={9}>
          <SearchResults
            searchResults={searchResult}
            setCurrentMovieID={setCurrentMovieID}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
