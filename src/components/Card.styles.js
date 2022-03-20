import styled from "styled-components";
import StarRateIcon from "@mui/icons-material/StarRate";
import { CardMedia } from "@mui/material";

export const CardTitle = styled.h3`
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  min-height: 100px;
  margin: 2px 2px 2px 2px;
  text-align: center;
`;

export const CardOverviewText = styled.p`
  font-family: "Ubuntu", sans-serif;
  overflow: auto;
  max-height: 75px;
  min-height: 75px;
`;

export const CardStarIcon = styled(StarRateIcon)`
  color: yellow;
  font-size: 40px;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  border-radius: 25px;
  background: black;
`;

export const CardRating = styled.h4`
  font-size: 30px;
  margin: 2px 2px 2px 2px;
`;

export const CardImage = styled(CardMedia)`
  height: 300px;
`;
