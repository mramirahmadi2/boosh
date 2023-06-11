import { Box, Container, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState, useEffect } from "react";
const SuccessPayment = () => {

  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 30,
          backgroundColor: red[800],
          marginRight: "30%",
          borderRadius: "16px",
          "&:hover": {
            backgroundColor: red[400],
            opacity: [0.9, 0.8, 0.7],
            color: "black",
          },
        }}
      >
        <Container
          sx={{
            mr: "5px",
            mt: "25px",
            color: "white",
            "&:hover": {
              color: "black",
            },
          }}
        >
          <Typography sx={{ marginRight: "50px" }}>
           خرید شما لغو شد.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default SuccessPayment;