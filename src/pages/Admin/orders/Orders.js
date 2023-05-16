import { useSelector } from "react-redux";
import RTL from "../../../RTL/Rtl";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";

const Orders = () => {
    
    
    return ( <>
      <h1>تایید سفارشات</h1>
      
      <RTL>
        {/* <TableContainer component={Paper} sx={{ width: '91%' , mb:"2%"  }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>اسم</TableCell>
                <TableCell>فامیلی</TableCell>
                <TableCell>شماره مشتری</TableCell>
                <TableCell>میزان خرید</TableCell>
                <TableCell>اطلاعات بیشتر</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.firstName}</TableCell>
                  <TableCell>{customer.familyName}</TableCell>
                  <TableCell>{customer.number}</TableCell>
                  <TableCell>{customer.totalPrice}</TableCell>
                  <TableCell>{customer.totalPrice}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={customers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer> */}
        </RTL>
    </> );
}
 
export default Orders;