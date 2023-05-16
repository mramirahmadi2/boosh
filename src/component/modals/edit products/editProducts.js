import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Container, IconButton, TextField } from "@mui/material";
import useFetch from "../../../UseFetch/useFetch";
import RTL from "../../../RTL/Rtl";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditProducts({ id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [book, setBook] = React.useState({});
  const [image, setImage] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(`http://localhost:3002/products/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    const formData = new FormData();
    formData.append("title", book.title);
    formData.append("group", book.group);
    formData.append("writer", book.writer);
    formData.append("price", book.price);
    formData.append("number", book.number);
    formData.append("category", book.category);
    formData.append("images", image);
    // axios
    //   .put(`http://localhost:3002/products/${id}`, formData)
    //   .then((res) => {
    //     console.log(res.data);
    //     handleClose();
   

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios.put(`http://localhost:3002/products/${id}`, formData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      console.log('ok Products')
    });
    axios.put(`http://localhost:3002/category/${id}`, formData).then((response) => {
      console.log(response.status);
      console.log(response.data);
      console.log('ok Products')
    });
  };
  const handleInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} dir="rtl">
          <Container sx={{ display: "flex"  }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ویرایش کردن کتاب {book.title}
            </Typography>
            
              {book.image && (
                <img
                  src={`http://localhost:3002/files/${book.image.replace(
                    "/files/",
                    ""
                  )}`}
                  srcSet={`http://localhost:3002/files/${book.image.replace(
                    "/files/",
                    ""
                  )}`}
                  alt={book.title}
                  loading="lazy"
                  style={{ width: "25%", marginRight: "30px"  }}
                />
              )}
            
          </Container>
          <form onSubmit={handleSubmit}>
            <RTL>
              <TextField
                id="title"
                name="title"
                label="نام محصول"
                variant="outlined"
                value={book.title}
                onChange={handleInputChange}
                fullWidth
                sx={{ mt: "5px", mb: "15px" }}
              />
              <TextField
                id="group"
                name="group"
                label="گروه"
                variant="outlined"
                value={book.group}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
              />
              <TextField
                id="writer"
                name="writer"
                label="نویسنده"
                variant="outlined"
                value={book.writer}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
              />
              <TextField
                id="price"
                name="price"
                label="قیمت"
                variant="outlined"
                value={book.price}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
              />
              <TextField
                id="number"
                name="number"
                label="تعداد محصول"
                variant="outlined"
                value={book.number}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
              />
              <TextField
                id="category"
                name="category"
                label="شرح کالا"
                variant="outlined"
                value={book.category}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
              />
            </RTL>
            <Typography sx={{ mb: "15px" }}>
              تصویر کتاب را آپلود کنید
            </Typography>
            <input
              id="images"
              type="file"
              value={book.images}
              onChange={handleFileInputChange}
              fullWidth
              dir="rtl"
              sx={{ mb: "20px" }}
            />

            <Container sx={{ disply: "flex", justifyContent: "start" }}>
              <Button type="submit" color="success">
                ذخیره
              </Button>
              <Button onClick={handleClose} color="error">
                بیخیال
              </Button>
            </Container>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
