import React, { useEffect, useState } from "react";
import axios from "axios";
import TableBook from "../../../component/table/TableBook";
import NewProducts from "./modals/new products/newProducts";
import EditProducts from "./modals/edit products/editProducts";
import DeleteProducts from "./modals/delete products/deleteProducts";

const ManageProducts = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [update, setUpdate] = useState(false);
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
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

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };

  const tableHeaders = [
    { name: "نام کتاب" },
    { name: "نویسنده" },
    { name: "قیمت" },
    { name: "تغییرات" },
  ];

  const formattedData = book.map((product) => ({
    id: product.id,
    cells: [
      product.title,
      product.writer,
      product.price,
      <div style={{ display: "flex" }}>
        <EditProducts id={product.id} onUpdate={handleUpdate} />
        <DeleteProducts
          id={product.id}
          name={product.title}
          onUpdate={handleUpdate}
        />
      </div>,
    ],
  }));

  return (
    <>
      <h1>محصولات</h1>
      <NewProducts onUpdate={()=>handleUpdate()} />
      {book.length > 0 && (
        <TableBook
          tableHeaders={tableHeaders}
          children={formattedData}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          count={book.length}
        />
      )}
    </>
  );
};

export default ManageProducts;

