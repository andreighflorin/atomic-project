import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface NoResultsFoundProps {
  message?: string;
}

const NoResultsFound: FC<NoResultsFoundProps> = ({ message }) => {
  const titleMessage = "No results found for the selected filters.";
  const bodyMessage =
    "Try searching for a different title or select another category from the list.";

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: "20px",
        p: "40px 20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        mx: "auto",
        ariaLive: "polite",
      }}
    >
      <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
        {message ? message : titleMessage}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {!message && bodyMessage}
      </Typography>
    </Box>
  );
};

export default NoResultsFound;
