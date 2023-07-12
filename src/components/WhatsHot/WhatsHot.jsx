import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  styled,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: "80px",
  textAlign: "center",
  marginBottom: "40px",
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  backgroundColor: "#fff",
  borderRadius: theme.spacing(2),
  cursor: "pointer",
}));

const StyledMoviePoster = styled(CardMedia)(({ theme }) => ({
  height: "400px",
  objectFit: "cover",
  borderTopLeftRadius: theme.spacing(2),
  borderTopRightRadius: theme.spacing(2),
}));

const StyledMovieContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledMovieTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
  fontSize: "12px",
}));

const StyledMovieRating = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

const StyledStarIcon = styled(StarIcon)(({ theme }) => ({
  color: "#fcae1e",
  marginRight: theme.spacing(0.5),
}));

const WhatsHop = () => {
  const [moviesData, setMoviesData] = useState([]);

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=1913c5cef98cea640c3e326ae350402d";

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        setMoviesData(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <StyledContainer>
      <StyledTitle variant="h4" gutterBottom>
        What's Hot 🔥
      </StyledTitle>
      <Grid container spacing={2}>
        {moviesData.slice(0, 20).map((movie, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <StyledCard>
              <StyledMoviePoster
                image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                title={movie.title}
              />
              <StyledMovieContent>
                <StyledMovieRating>
                  <StyledStarIcon />
                  <Typography variant="subtitle1">
                    {movie.vote_average}
                  </Typography>
                </StyledMovieRating>
                <StyledMovieTitle variant="h6">{movie.title}</StyledMovieTitle>
              </StyledMovieContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default WhatsHop;
