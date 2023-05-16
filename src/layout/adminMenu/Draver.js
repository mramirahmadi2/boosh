import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Tab,
  Tabs,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              orientation="vertical"
            >
              <Tab component={Link} label="خانه" to="/" />
              <Tab component={Link} label="محصولات" to="/Products" />
              <Tab component={Link} label="در باره ما" to="/Products" />
              <Tab component={Link} label="ارتباط با ما" to="/Products" />
            </Tabs>
           
          </ListItemButton>
          <ListItemButton onClick={() => setOpenDrawer(false)} sx={{ mt:"250%" }}>
          <Button  variant="contained">
                  پنل ادیمن
                </Button>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
