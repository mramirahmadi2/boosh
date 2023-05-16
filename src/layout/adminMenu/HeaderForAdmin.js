import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Draver";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const BookShoop = useNavigate();

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
                      
                        setValue(value);
                      
                    }}
                  >
                    <Tab
                      component={Link}
                      label="محصولات"
                      to="/AdminPanl/TableProduct"
                      sx={{ color: "white", fontWeight: 600 }}
                    />
                    <Tab
                      component={Link}
                      label="تایید سفارشات"
                      to="/AdminPanl/Orders"
                      sx={{ color: "white", fontWeight: 600 }}
                    />
                    <Tab
                      component={Link}
                      label="دریافت مشتری"
                      to="/AdminPanl/Complete"
                      sx={{ color: "white", fontWeight: 600 }}
                    />
                  </Tabs>
                </Container>
                <Container sx={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      BookShoop("/");
                      setValue();
                    }}
                  >
                    بازگشت به سایت
                  </Button>
                </Container>
              </Container>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
