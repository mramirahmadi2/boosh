import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import RTL from "../../../RTL/Rtl";
import DeleteCustomer from "./modal/DeleteCustomer";
import CheckCustomer from "./modal/CheckCustomer";
import { useEffect, useState } from "react";
import axios from "axios";

const Complete = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [customers, setCustomers] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/posts")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleUpdate = () => {
    setUpdate(true);
  };
  return (
    <>
      <p>در انتظار رسیدن به دست مشتری</p>
      <RTL>
        <TableContainer component={Paper} sx={{ width: "91%", mb: "2%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>اسم</TableCell>
                <TableCell>فامیلی</TableCell>
                <TableCell>شماره مشتری</TableCell>
                <TableCell>میزان خرید</TableCell>
                <TableCell>تایید یا حذف</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.firstname}</TableCell>
                    <TableCell>{customer.lastname}</TableCell>
                    <TableCell>{customer.number}</TableCell>
                    <TableCell>{customer.totalPrice} تومان</TableCell>
                    <TableCell sx={{ display: "flex" }}>
                      <DeleteCustomer
                        id={customer.id}
                        name={customer.lastname}
                        onUpdate={() => handleUpdate()}
                      />{" "}
                      <CheckCustomer
                        id={customer.id}
                        name={customer.lastname}
                        onUpdate={() => handleUpdate()}
                      />
                    </TableCell>
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
        </TableContainer>
      </RTL>
    </>
  );
};

export default Complete;
