import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "black",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Box display="flex" alignItems="center" marginRight={1}>
            <DensityMediumIcon sx={{ color: "white" }} />
          </Box>
        </Box>
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#fcae1e",
              padding: "5px 10px",
              borderRadius: "8px",
              color: "black",
            }}
          >
            Movie DB
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Link href="/" color="inherit" underline="none">
            <Typography variant="body1" sx={{ marginLeft: 2, color: "white" }}>
              New Releases
            </Typography>
          </Link>
          <Link href="/hot" color="inherit" underline="none">
            <Typography variant="body1" sx={{ marginLeft: 2, color: "white" }}>
              What's Hot
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
