import { FC } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, TextField, Button } from "@mui/material";
import { setSearchWord } from "../../store/dataSlice";

interface SearchFormInputs {
  query: string;
}

const SearchForm: FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
  } = useForm<SearchFormInputs>({
    defaultValues: { query: "" },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<SearchFormInputs> = (data) => {
    dispatch(setSearchWord(data.query));
    setValue("query", "");
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          minHeight: "75px",
        }}
      >
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="query"
            label="Search for a movie"
            placeholder="Enter movie title"
            variant="outlined"
            fullWidth
            {...register("query", {
              required: "Search query is required",
              minLength: {
                value: 3,
                message: "Search query must be at least 3 characters",
              },
              pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: "Search query can only contain letters and spaces",
              },
            })}
            error={!!errors.query}
            helperText={errors.query?.message}
            aria-label="Search for a movie by title"
          />
        </form>
      </Box>

      <Button
        type="submit"
        variant="outlined"
        color="success"
        onClick={handleSubmit(onSubmit)}
        sx={{
          px: "30px",
          height: "56px",
          whiteSpace: "nowrap",
          alignSelf: { xs: "center", sm: "flex-start" },
        }}
        disabled={isSubmitting || !isValid}
        aria-label="Search for movies"
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchForm;
