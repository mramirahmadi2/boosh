import React from "react";
// import { makeStyles } from '@mui/styles';
// import Pagination from '@material-ui/lab/Pagination';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function PaginationComponent(props) {
//   const classes = useStyles();
//   const { count, page, onChange } = props;

//   return (
//     <div className={classes.root}>
//       <Pagination count={count} page={page} onChange={onChange} />
//     </div>
//   );
// }
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
export default function PaginationRanges(props) {
  
  const { count, page, onChange } = props;
  return (
   <Box  sx={{margin:"20px 0px"}} display={"flex"} justifyContent={"center"} alignItems={"center"}>
    <Stack spacing={2}>
      <Pagination
        showFirstButton
        showLastButton
        count={count}
        page={page}
        onChange={onChange}
       
        
      />
    </Stack>
    </Box>
  );
}
