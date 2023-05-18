import * as React from "react";
import Box from "@mui/material/Box";
import MenuBooks from "../../menu books/MenuBooks";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Container, IconButton, MenuItem, TextField } from "@mui/material";
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

export default function EditProducts({ id, onUpdate }) {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = {
      title: book.title,
      group: book.group,
      writer: book.writer,
      price: book.price,
      number: book.number,
      category: book.category,
    };

    const formData = new FormData();
    if (image) {
      formData.append("image", image);
      formData.append("previousImage", book.image);
      updatedData.image = formData;
    } else {
      updatedData.image = book.image;
    }

    axios
      .put(`http://localhost:3002/products/${id}`, updatedData)
      .then((response) => {
        onUpdate();
        setBook(response.data);
        handleClose();
      });
  };

  const handleInputChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    setImage(file);
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
          <Container sx={{ display: "flex" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ویرایش کردن کتاب {book.title}
            </Typography>
            {typeof book.image === "string" && (
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
                style={{ width: "25%", marginRight: "30px" }}
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
                select
              >
                {MenuBooks.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
                rows={4}
                fullWidth
                multiline
                sx={{ mb: "15px" }}
              />
            </RTL>
            <Typography sx={{ mb: "15px" }}>
              تصویر کتاب را آپلود کنید
            </Typography>
            <input
              id="images"
              type="file"
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
