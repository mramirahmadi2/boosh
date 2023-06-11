import React from "react";
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
