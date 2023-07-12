import React, { useState, useEffect } from "react";
import { Typography, Box, styled } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const StyledContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  margin: "0 100px",
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "bold",
  marginTop: "80px",
  fontFamily: "sans-serif",
  letterSpacing: "-1px",
  lineHeight: "1",
  textAlign: "center",
}));

const StyledCarouselImageContainer = styled(Box)(({ theme }) => ({
  width: "700px",
  height: "300px",
  margin: "20px auto",
  overflow: "hidden",
}));

const StyledCarouselImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  margin: "20px auto",
}));

const StyledMovieDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "600px",
  alignItems: "flex-start",
  margin: "10px auto",
  gap: "5px",
  marginBottom: "70px",
}));

// const StyledMoviePosterContainer = styled(Box)(({ theme }) => ({
//   flex: ".02",
//   width: "100%",
//   height: "100%",
//   margin: "10px auto",
//   overflow: "hidden",
//   border: "1px solid red",
// }));

const StyledMoviePoster = styled("img")(({ theme }) => ({
  flex: ".1",
  width: "300px",
  height: "400px",
  objectFit: "cover",
}));

const StyledMovieInfo = styled(Box)(({ theme }) => ({
  flex: "0.9",
  marginLeft: "20px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

const StyledMovieTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: "1",
}));

const StyledMovieRating = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  marginBottom: "10px",
}));

const StyledMovieDescription = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 24px",
  textAlign: "justify",
  textJustify: "inter-word",
}));

const StyledDot = styled("span")(({ theme }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#000",
  margin: "0 5px",
  cursor: "pointer",
}));

const StyledActiveDot = styled(StyledDot)(({ theme }) => ({
  backgroundColor: "#000",
}));

const MovieCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [moviesData, setMoviesData] = useState([]);

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=1913c5cef98cea640c3e326ae350402d";

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        console.log(data.data.results);
        setMoviesData(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledContainer>
      <StyledHeader variant="h2">New Releases 🍿</StyledHeader>
      <Carousel
        selectedItem={activeSlide}
        onChange={handleSlideChange}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {moviesData.map((movie, index) => (
          <div key={index}>
            <StyledCarouselImageContainer>
              <StyledCarouselImage
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </StyledCarouselImageContainer>
            <StyledMovieDetails>
              <StyledMoviePoster
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <StyledMovieInfo>
                <StyledMovieTitle variant="h3">{movie.title}</StyledMovieTitle>
                <StyledMovieRating variant="h4">
                  {movie.vote_average}⭐️
                </StyledMovieRating>
                <StyledMovieDescription variant="h4">
                  {movie.overview}
                </StyledMovieDescription>
              </StyledMovieInfo>
            </StyledMovieDetails>
          </div>
        ))}
      </Carousel>
      <Box mt={2} textAlign="center">
        {moviesData.map((_, index) => (
          <React.Fragment key={index}>
            {index === activeSlide ? (
              <StyledActiveDot onClick={() => handleSlideChange(index)} />
            ) : (
              <StyledDot onClick={() => handleSlideChange(index)} />
            )}
          </React.Fragment>
        ))}
      </Box>
    </StyledContainer>
  );
};

export default MovieCarousel;
