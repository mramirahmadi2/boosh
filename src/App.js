import "./App.css";
import {  StyledEngineProvider, Typography } from "@mui/material";
import AppRoute from "./router/App.route";
function App() {
  return (
    <div dir="rtl"  style={{marginTop:"80px",marginRight:"11%"}}>
      <StyledEngineProvider injectFirst > 
        <Typography component={'span'} >          
          <AppRoute  />
        </Typography>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
