import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MoviePage({ currentMovieID }) {
  const apiKey = "918ef6cfd3c244a05980a5a2c2634c69";
  const [pageData, setPageData] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${currentMovieID}?api_key=${apiKey}&language=en-US`
      )
      .then((result) => {
        console.log(result.data.results);
        setPageData(result.data.results);
      });
  }, []);

  //`https://api.themoviedb.org/3/movie/{currentMovieID}?api_key=${apiKey}>&language=en-US`

  console.log(currentMovieID);
  return (
    <Link to="/">
      <p>{currentMovieID}</p>
    </Link>
  );
}
