import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../layout/menu/Header";
import AboutUs from "../pages/AboutUs/AbutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import DetailsProudocts from "../pages/Proudocts/DetailsProudoct";
import Products from "../pages/Proudocts/Proudocts";
import CartBoosh from "../pages/Cart/CartBoosh";
import LogInAdmin from "../pages/Admin/LogInAdmin";
import AdminPanl from "../pages/Admin/AdminPanl";

const AppRoute = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products/:group" element={<Products />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/DetailsBook/:id" element={<DetailsProudocts />} />
          <Route path="/CartBoosh" element={<CartBoosh />} />
          <Route path="/LogInAdmin" element={<LogInAdmin />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/AdminPanl" element={<AdminPanl />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoute;
