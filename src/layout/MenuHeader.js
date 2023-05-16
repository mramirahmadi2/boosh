import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { headerAdmin } from "../component/checkHeader/headerSlice";
import { useEffect, lazy, Suspense } from "react";

const AdminHeader = lazy(() => import("./adminMenu/HeaderForAdmin"));
const UserHeader = lazy(() => import("./menu/Header"));

const MenuHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAdminHeader = useSelector((state) => state.checkHeader.value);

  useEffect(() => {
    const isPathAdmin = location.pathname.includes('/AdminPanl');
    dispatch(headerAdmin(isPathAdmin));
  }, [location, dispatch]);

  const Header = isAdminHeader ? AdminHeader : UserHeader;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
  );
};

export default MenuHeader;
