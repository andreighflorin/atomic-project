import { FC } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../../types/movie";
import defaultMovieImage from "../../assets/default-poster.jpg";

interface CardItemProps {
  movie: Movie;
}

const CardItem: FC<CardItemProps> = ({ movie }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          maxWidth: 280,
          minHeight: 350,
          mx: "auto",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
              : defaultMovieImage
          }
          alt={movie.title}
          sx={{
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ padding: "16px" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: "600",
              fontSize: "1.1rem",
              color: "#333",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {movie.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.9rem" }}
          >
            <strong>Release Date:</strong> {movie.release_date}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.9rem" }}
          >
            <strong>Popularity:</strong> {movie.popularity}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.9rem" }}
          >
            <strong>Language:</strong> {movie.original_language.toUpperCase()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
