import { FC, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  CircularProgress,
  Button,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { setSearchWord, setGenre } from "../../store/dataSlice";
import { useGetMoviesQuery } from "../../store/apiSlice";
import { Movie } from "../../types/movie";

const GENRE_MAP: Record<number, string> = {
  28: "Action",
  12: "Adventure",
  878: "Science Fiction",
  35: "Comedy",
  53: "Thriller",
  18: "Drama",
  10749: "Romance",
  80: "Crime",
  27: "Horror",
  10402: "Music",
};

interface GenreOption {
  id: number;
  name: string;
}

interface IFormInput {
  genre: string | undefined;
}

const SortForm: FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMoviesQuery();
  const movies: Movie[] = data?.data?.items || [];

  const uniqueGenreIds = useMemo(() => {
    return Array.from(
      new Set(movies.flatMap((movie) => movie.genre_ids))
    ).filter((id) => GENRE_MAP[id]);
  }, [movies]);

  const genreOptions: GenreOption[] = useMemo(() => {
    return [
      { id: 0, name: "All Movies" },
      ...uniqueGenreIds
        .map((id) => ({ id, name: GENRE_MAP[id] }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    ];
  }, [uniqueGenreIds]);

  const { setValue, reset, watch } = useForm<IFormInput>({
    defaultValues: { genre: "0" },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(setGenre(parseInt(data.genre ?? "0", 10)));
    dispatch(setSearchWord(""));
  };

  const handleGenreChange = (event: SelectChangeEvent<string>) => {
    const selectedGenreId = event.target.value;
    setValue("genre", selectedGenreId);
    onSubmit({ genre: selectedGenreId });
  };

  const handleReset = () => {
    setValue("genre", "0");
    dispatch(setGenre(0));
    dispatch(setSearchWord(""));
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <FormControl fullWidth margin="normal" sx={{ mt: 1 }}>
          <InputLabel htmlFor="genre">Genre</InputLabel>
          <Select
            id="genre"
            label="Genre"
            value={watch("genre") || "0"}
            onChange={handleGenreChange}
            disabled={isLoading}
          >
            {isLoading ? (
              <MenuItem disabled>
                <CircularProgress size={24} />
              </MenuItem>
            ) : (
              genreOptions.map(({ id, name }) => (
                <MenuItem key={id} value={id.toString()}>
                  {name}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleReset}
          sx={{
            px: "15px",
            whiteSpace: "nowrap",
            alignSelf: { xs: "center", sm: "flex-start" },
            height: "56px",
          }}
        >
          Reset Filters
        </Button>
      </Box>
    </Box>
  );
};

export default SortForm;
