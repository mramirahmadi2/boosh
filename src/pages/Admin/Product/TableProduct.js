import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import RTL from "../../../RTL/Rtl";
import NewProducts from "../../../component/modals/new products/newProducts";
import EditProducts from "../../../component/modals/edit products/editProducts";
import DeleteProducts from "../../../component/modals/delete products/deleteProducts";
import axios from "axios";



const TableProduct = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [update,setUpdate] = useState(false);
  const [book, setBook] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3002/products`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    if (update) {
      setUpdate(false);
    }
  }, [update]);
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleUpdate = () => {
    setUpdate(true)
  }
  
  return (
    <>
      <h1>محصولات</h1>
      <NewProducts onUpdate={() => handleUpdate()} />
      {book && (
        <RTL>
          <TableContainer component={Paper} sx={{ width: "91%", mb: "2%" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>نام کتاب</TableCell>
                  <TableCell>نویسنده</TableCell>
                  <TableCell>قیمت</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {book
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.writer}</TableCell>
                      <TableCell>{book.price}</TableCell>
                      <TableCell sx={{ display: "flex" }}>
                        <EditProducts id={book.id} onUpdate={() => handleUpdate()} /> <DeleteProducts id={book.id} name={book.title} onUpdate={() => handleUpdate()} />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={book.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </RTL>
      )}
    </>
  );
};

export default TableProduct;
