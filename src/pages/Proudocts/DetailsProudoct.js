import {
  Box,
  Button,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useFetch from "../../UseFetch/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../component/counter/conterSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";

const DetailsProudocts = () => {
  const count = useSelector((state) => state.counter.value);
  const [buy, okBuy] = useState(false);
  const [order, setOrder] = useState(0);
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    data: books,
    error,
    isPending,
  } = useFetch("http://localhost:3002/products/" + id);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
  const handleAddToCart = () => {
    okBuy(true);
    dispatch(increment());
    setOrder(order + 1);
    let basketProduct = {
      title: books.title,
      group: books.group,
      writer: books.writer,
      price: books.price,
      number: 1,
      image: books.image,
    };
    localStorage.setItem(books.title, JSON.stringify(basketProduct));
    if (localStorage.getItem(books.title)) {
      alert(`کتاب ${basketProduct.title} در سبد خرید قرار گرفت`);
    }
  };
  const Add = () => {
    localStorage.removeItem(books.title);
    dispatch(increment());
    setOrder(order + 1);
    let basketProduct = {
      title: books.title,
      group: books.group,
      writer: books.writer,
      price: books.price,
      number: order + 1,
      image: books.image,
    };
    localStorage.setItem(books.title, JSON.stringify(basketProduct));
  };
  const Decrease = () => {
    localStorage.removeItem(books.title);
    dispatch(decrement());
    setOrder(order - 1);
    let basketProduct = {
      title: books.title,
      group: books.group,
      writer: books.writer,
      price: books.price,
      number: order - 1,
      image: books.image,
    };
    if (order === 1) {
      okBuy(false);
      localStorage.removeItem(books.title);
    } else {
      localStorage.setItem(books.title, JSON.stringify(basketProduct));
    }
  };
  useEffect(() => {
    if (!buy) {
      dispatch({ type: "counter/set", payload: 0 });
    }
    console.log("hi");
  }, [buy, dispatch]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {books &&
        (isMatch ? (
          <>
            <div>
              <h1>{books.title}</h1>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >{books.image && (
                <img
                  src={`http://localhost:3002/files/${books.image.replace('/files/', '')}`}
                  srcSet={`http://localhost:3002/files/${books.image.replace('/files/', '')}`}
                  alt={books.title}
                  loading="lazy"
                  style={{ width: "60%", marginLeft: "50px" }}
                />
              )}
              
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "0",
                    textAlign: "right",
                    marginTop: "5px",
                  }}
                >
                  <p style={{ marginLeft: "50px" }}>{books.category}</p>
                  <Container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "-15px",
                    }}
                  >
                    <span>نویسنده: {books.writer}</span>
                    <span>قیمت: {books.price} تومان </span>
                  </Container>
                  <Container
                    sx={{
                      marginRight: "-25px",
                    }}
                  >
                    <IconButton
                      color="success"
                      onClick={() => dispatch(increment())}
                    >
                      <AddIcon />
                    </IconButton>
                    <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                      {count}
                    </span>
                    <IconButton
                      variant="contained"
                      color="error"
                      onClick={() => dispatch(decrement())}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Container>
                </Container>
              </Box>
            </div>
          </>
        ) : (
          <div>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            >
              <img
                src={`http://localhost:3002/files/${books.image.replace('/files/', '')}`}
                srcSet={`http://localhost:3002/files/${books.image.replace('/files/', '')}`}
                alt={books.title}
                loading="lazy"
                style={{ width: "30%" }}
              />
              <Container>
                <h1>{books.title}</h1>
                <p style={{ width: "50%", marginRight: "20px" }}>
                  {books.category}
                </p>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span>نویسنده: {books.writer}</span>
                  <span style={{ width: "50%" }}>
                    قیمت: {books.price} تومان{" "}
                  </span>
                </Container>
                {buy ? (
                  <Container sx={{ mt: "30px", mr: "-5px" }}>
                    <IconButton color="success" onClick={Add}>
                      <AddIcon />
                    </IconButton>
                    <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                      {order}
                    </span>
                    <IconButton
                      variant="contained"
                      color="error"
                      onClick={Decrease}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Container>
                ) : (
                  <Button
                    onClick={handleAddToCart}
                    variant="outlined"
                    color="success"
                    sx={{ mt: "30px", mr: "16px" }}
                  >
                    اضافه به سبد خرید
                  </Button>
                )}
              </Container>
            </Box>
          </div>
        ))}
    </div>
  );
};

export default DetailsProudocts;
