import { FC } from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";
import { useGetMoviesQuery } from "./store/apiSlice";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SortForm from "./components/SortForm";
import List from "./components/List";
import NoResultsFound from "./components/NoResultsFound";

const App: FC = () => {
  const { data, error, isLoading } = useGetMoviesQuery();
  const movies = data?.data?.items || [];

  const noMoviesMessage = "No movies available at the moment.";

  const handleError = (error: any) => {
    if (error?.message) {
      return `Error fetching data: ${error.message}`;
    }
    if (error?.status) {
      return `Error fetching data. Status: ${error.status}`;
    }
    return "An unknown error occurred while fetching the data.";
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mb: "40px" }}>
        {isLoading && (
          <CircularProgress
            sx={{ display: "block", mx: "auto", my: 4 }}
            aria-busy="true"
            role="progressbar"
            aria-live="assertive"
            aria-label="Loading movies"
          />
        )}

        {error && (
          <Typography
            color="error"
            sx={{ textAlign: "center", mt: "40px" }}
            role="alert"
            aria-live="assertive"
            aria-label={`Error: ${handleError(error)}`}
          >
            {handleError(error)}
          </Typography>
        )}

        {movies.length === 0 && !isLoading && !error && (
          <NoResultsFound message={noMoviesMessage} />
        )}

        {movies.length > 0 && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                justifyContent: "center",
                alignItems: "center",
                my: 4,
                mx: "auto",
              }}
            >
              <SearchForm />
              <SortForm />
            </Box>
            <List movies={movies} />
          </>
        )}
      </Container>
    </>
  );
};

export default App;
