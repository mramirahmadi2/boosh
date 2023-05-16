import { Container, Typography } from "@mui/material";
import SalesChart from "../../component/charts/SalesChart";
import ProductChart from "../../component/charts/ProductChart";

const AboutUs = () => {
  return (
    <>
      <h1>در باره ما</h1>
      <Typography>
        بوش یک سایت برای خرید کتاب است که می توانید در آن کتاب مورد نظر خود را
        پیدا و با ارزان ترین قیمت تهیه کنید.{" "}
      </Typography>
      <Container sx={{ display: "flex", mr: "0px" }}>
        <Container sx={{ mt: "30px", mr: "0px" }}>
          <SalesChart />
        </Container>
        <Container sx={{ mt: "30px" }}>
       
          <ProductChart />
        </Container>
      </Container>
    </>
  );
};
export default AboutUs;
