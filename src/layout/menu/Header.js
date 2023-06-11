import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Draver";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuBooks from "../../component/menu books/MenuBooks"
const Header = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const count = useSelector((state) => state.counter.value);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const cartPage = useNavigate();
  const AdminPanl = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProductMnue = () => {
    setAnchorEl(null);
    setValue(1);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)", mr: "10%" }} />
          {isMatch ? (
            <>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",

                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "2rem", mr: "20px" }}>
                  Boosh.com
                </Typography>
                <div>
                  <DrawerComp />
                </div>
              </Container>
            </>
          ) : (
            <>
              <Container
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Container>
                  <Tabs
                    indicatorColor="secondary"
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => {
                      if (value !== 1) {
                        setValue(value);
                      }
                    }}
                  >
                    <Tab
                      component={Link}
                      label="خانه"
                      to="/"
                      sx={{ color: "white", fontWeight: 600 }}
                    />

                    <Tab
                      label="محصولات"
                      sx={{ color: "white", fontWeight: 600 }}
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    />

                    <Tab
                      component={Link}
                      label="در باره ما"
                      to="/AboutUs"
                      sx={{ color: "white", fontWeight: 600 }}
                    />

                    <Tab
                      component={Link}
                      label="ارتباط با ما"
                      to="/ContactUs"
                      sx={{ color: "white", fontWeight: 600 }}
                    />
                  </Tabs>
                </Container>
                <Container sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    variant="contained"
                    sx={{ ml: "30px" }}
                    onClick={() => {
                      cartPage("/CartBoosh");
                      setValue();
                    }}
                  >
                    {count > 0 ? `سبد خرید ${count}` : "سبد خرید"}
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      AdminPanl("/LogInAdmin");
                      setValue();
                    }}
                  >
                    پنل ادمین
                  </Button>
                </Container>
              </Container>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {MenuBooks.map((product, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleProductMnue}
                    component={Link}
                    to={`/Products/${product.value}`}
                  >
                    {product.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
