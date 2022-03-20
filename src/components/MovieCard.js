import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CardImage,
  CardOverviewText,
  CardRating,
  CardStarIcon,
  CardTitle,
} from "./Card.styles";

export default function MovieCard({ result, setCurrentMovieID }) {
  return (
    <Card raised>
      {result.poster_path && (
        <CardImage
          component="img"
          alt="image of movie poster"
          image={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        />
      )}
      <CardContent>
        <Link to="/moviepage">
          <CardTitle onClick={() => setCurrentMovieID(result.id)}>
            {result.title}
          </CardTitle>
        </Link>
        <CardRating>
          <CardStarIcon /> {result.vote_average}
        </CardRating>
        <CardOverviewText>{result.overview}</CardOverviewText>
      </CardContent>
    </Card>
  );
}
