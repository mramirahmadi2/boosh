import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "../layout/MenuHeader";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import DetailsProudocts from "../pages/Proudocts/DetailsProudoct";
import Products from "../pages/Proudocts/Proudocts";
import CartBoosh from "../pages/Cart/CartBoosh";
import LogInAdmin from "../pages/Admin/LogInAdmin";
import AdminPanl from "../pages/Admin/AdminPanl";
import TableProduct from "../pages/Admin/Product/TableProduct";
import CustomerInformationForm from "../pages/CustomerInformationForm/CustomerInformationForm";
import Orders from "../pages/Admin/orders/Orders";
import Complete from "../pages/Admin/Completion of orders/Complete";
import SuccessPayment from "../pages/CustomerInformationForm/SuccesPayment";



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
          <Route
            path="/CustomerInformationForm"
            element={<CustomerInformationForm />}
          />
          <Route path="/SuccessPayment" element={<SuccessPayment />} />

          <Route path="/AdminPanl" element={<AdminPanl />} />
          <Route path="/AdminPanl/TableProduct" element={<TableProduct />} />
          <Route path="/AdminPanl/Orders" element={<Orders />} />
          <Route path="/AdminPanl/Complete" element={<Complete />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoute;
