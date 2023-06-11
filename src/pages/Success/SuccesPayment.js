import { Box, Container, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { incrementByAmount } from "../../component/counter/conterSlice";
import { clearCustomerInformation } from "../../component/customer/Customer";

import { useDispatch } from "react-redux";

const SuccessPayment = () => {
    const [paymentNumber, setPaymentNumber] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
      const randomNumber = Math.floor(10000 + Math.random() * 90000);
      setPaymentNumber(randomNumber.toString());
      localStorage.clear();
      dispatch(incrementByAmount(0))
      dispatch(clearCustomerInformation([]))
    }, []);
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 200,
          backgroundColor: green[800],
          marginRight: "30%",
          borderRadius: "16px",
          "&:hover": {
            backgroundColor: green[400],
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
            پرداخت با موفقیت انجام شد.
          </Typography>
          <Typography sx={{ marginTop:"10px" }}>
            به زودی سفارش شما تایید می شود و از طریق پست ارسال میگردد.
          </Typography>
          <Typography sx={{ marginTop: "10px" }}>
            شماره پرداخت: {paymentNumber}
          </Typography>
          <Typography sx={{ marginRight: "70px",marginTop:"40px" }}>ممنون از خرید شما</Typography>
        </Container>
      </Box>
    </>
  );
};

export default SuccessPayment;
