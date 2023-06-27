// import {
//     Paper,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//   } from "@mui/material";
// import RTL from "../../RTL/Rtl";

//   const TableBook = ({tableHeaders, children}) => {
//     return ( <>
//       <RTL>
//       <TableContainer component={Paper} sx={{ width: "91%", mb: "2%" }}>
//         <Table>
//             <TableHead>
//                 <TableRow>
//                 {tableHeaders.map(header => {
//                         return (
//                             <TableCell  key={header.name}>{header.name}</TableCell>
//                         )
//                     })}
//                 </TableRow>
//             </TableHead>
//             <TableBody>
//                 {children}
//             </TableBody>
//         </Table>
//       </TableContainer>
//       </RTL>
//     </> );
//   }

//   export default TableBook;
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import RTL from "../../RTL/Rtl";

const TableBook = ({
  tableHeaders,
  children,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  count,
}) => {
  return (
    <>
      <RTL>
        <TableContainer component={Paper} sx={{ width: "90%", mb: "10%" }}>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => {
                  return <TableCell key={header.name}>{header.name}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {children.map((child) => (
                <TableRow key={child.id}>
                  {child.cells.map((cell) => (
                    <TableCell key={cell}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ mt: "2%" }}
          />
        </TableContainer>
      </RTL>
    </>
  );
};

export default TableBook;
