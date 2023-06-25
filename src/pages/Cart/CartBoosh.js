import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TableContainer,
  Paper,
  TablePagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../component/counter/conterSlice";
import { useNavigate } from "react-router-dom";
import { setTotalPrice } from "../../component/price/totalPriceSlice";
import RTL from "../../RTL/Rtl";

const CartBoosh = () => {
  const [cartChanged, setCartChanged] = useState(false);
  const products = Object.values(localStorage).map((item) => JSON.parse(item));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const Form = useNavigate();
  const dispatch = useDispatch();
  const totalAmount = products.reduce((acc, curr) => {
    return acc + parseInt(curr.price) * parseInt(curr.number);
  }, 0);
  useEffect(() => {
    if (cartChanged) {
      setCartChanged(false);
    }
  }, [cartChanged]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const clearCart = () => {
    localStorage.clear();
    setCartChanged(true);
    dispatch(incrementByAmount(0))
  };

  const increaseQuantity = (product) => {
    const newProducts = [...products];
    console.log("newProducts", newProducts);
    const index = newProducts.findIndex((p) => p.title === product.title);
    newProducts[index].number += 1;
    localStorage.setItem(product.title, JSON.stringify(newProducts[index]));
    setCartChanged(true);
    dispatch(increment());
  };

  const decreaseQuantity = (product) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.title === product.title);
    newProducts[index].number -= 1;
    if (newProducts[index].number === 0) {
      localStorage.removeItem(product.title);
    } else {
      localStorage.setItem(product.title, JSON.stringify(newProducts[index]));
    }
    setCartChanged(true);
    dispatch(decrement());
  };

  return (
    <>
      <Container>
        <h1>خرید های شما</h1>
        <RTL>
          {products.length > 0 ? (
            <>
              <TableContainer component={Paper} sx={{ width: "91%", mb: "2%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>نام محصول</TableCell>
                      <TableCell>تعداد</TableCell>
                      <TableCell>قیمت واحد</TableCell>
                      <TableCell>مبلغ کل</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>
                          <Button onClick={() => decreaseQuantity(product)}>
                            -
                          </Button>
                          {product.number}
                          <Button onClick={() => increaseQuantity(product)}>
                            +
                          </Button>
                        </TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.number * product.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={products.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>مبلغ خرید: {totalAmount} تومان</p>
                <Button
                sx={{mr:"20px"}}
                  variant="contained"
                  color="success"
                  onClick={() => {
                    Form("/CustomerInformationForm");
                    dispatch(setTotalPrice(totalAmount));
                  }}
                >
                  ادامه خرید
                </Button>
              </Container>
              <Button onClick={clearCart}>خالی کردن سبد خرید</Button>
            </>
          ) : (
            <p>سبد خرید شما خالی است</p>
          )}
        </RTL>
      </Container>
    </>
  );
};

export default CartBoosh;
