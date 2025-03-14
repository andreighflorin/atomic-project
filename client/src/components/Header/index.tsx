import { FC } from "react";
import { Box, Typography } from "@mui/material";

const Header: FC = () => {
  const titleMessage = "MoviesApp";
  return (
    <Box
      sx={{
        backgroundColor: "#3f51b5",
        borderBottom: "1px solid #fff",
        padding: { xs: "10px", sm: "20px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        {titleMessage}
      </Typography>
    </Box>
  );
};

export default Header;
