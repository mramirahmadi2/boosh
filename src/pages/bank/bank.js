import { Button, Typography } from "@mui/material";
import bankForm from "./img/photo_2022-04-30_04-35-34.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BankPayment = () => {
  const totalPrice = useSelector((state) => state.price.value);
  const customerInformation = useSelector((state) => state.customerInformation.value);

  const navigator = useNavigate();
  const postProducts = async() =>{
    await axios.post(`http://localhost:3002/orders`, customerInformation[0]);
    navigator("/SuccessPayment")
  }
  return (
    <>
      <Typography>مبلغ خرید شما: {totalPrice}</Typography>
      <img src={bankForm} alt="BankImg" />
      <Button
        sx={{ position: "absolute", top: "73%", right: "14%", width: "200px" }}
        variant="contained"
        color="success"
        onClick={postProducts}
      >
        پرداخت
      </Button>
      <Button
        sx={{
          position: "absolute",
          top: "73%",
          right: "27.5%",
          width: "200px",
        }}
        variant="contained"
        color="error"
        onClick={()=>navigator("/ErrorPayment")}
      >
        انصراف
      </Button>
    </>
  );
};

export default BankPayment;
