
import { createTheme} from "@mui/material/styles";


const theme = createTheme({
  direction: "rtl",
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          right:30,
          left: "unset",
        },
      },
    },
  },
});

export default theme;



