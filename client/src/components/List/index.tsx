import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Grid } from "@mui/material";
import CardItem from "../Card";
import NoResultsFound from "../NoResultsFound";

import { Movie } from "../../types/movie";

interface ListProps {
  movies: Movie[];
}

const List: FC<ListProps> = ({ movies }) => {
  const { searchWord, genre } = useSelector((state: RootState) => state.data);

  const filteredData = useMemo(() => {
    return movies.filter((movie: Movie) => {
      const matchesSearch =
        !searchWord ||
        movie.title.toLowerCase().includes(searchWord.toLowerCase());
      const matchesGenre = !genre || movie.genre_ids.includes(Number(genre));

      return matchesSearch && matchesGenre;
    });
  }, [movies, searchWord, genre]);

  if (filteredData.length === 0) {
    return <NoResultsFound />;
  }

  return (
    <Grid
      container
      spacing={3}
      justifyContent={filteredData.length < 4 ? "center" : "flex-start"}
    >
      {filteredData.map((movie: Movie) => (
        <CardItem key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
};

export default List;
