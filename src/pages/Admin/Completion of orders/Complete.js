import React, { useEffect, useState } from "react";
import axios from "axios";
import TableBook from "../../../component/table/TableBook";
import CheckCustomer from "./modal/CheckCustomer";
import DeleteCustomer from "./modal/DeleteCustomer";

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
    setUpdate(false);
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

  const tableHeaders = [
    { name: "اسم" },
    { name: "فامیلی" },
    { name: "شماره مشتری" },
    { name: "میزان خرید" },
    { name: "تایید یا حذف" },
  ];

  const formattedData = customers.map((customer) => ({
    id: customer.id,
    cells: [
      customer.firstname,
      customer.lastname,
      customer.number,
      `${customer.totalPrice} تومان`,
      <div style={{ display: "flex" }}>
        <DeleteCustomer
          id={customer.id}
          name={customer.lastname}
          onUpdate={() => handleUpdate()}
        />
        <CheckCustomer
          id={customer.id}
          name={customer.lastname}
          onUpdate={() => handleUpdate()}
        />
      </div>,
    ],
  }));

  return (
    <>
      <p>در انتظار رسیدن به دست مشتری</p>
      <TableBook
        tableHeaders={tableHeaders}
        children={formattedData}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        count={customers.length}
      />
    </>
  );
};

export default Complete;
