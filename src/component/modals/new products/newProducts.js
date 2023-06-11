import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuBooks from "../../menu books/MenuBooks";
import Modal from "@mui/material/Modal";
import { Container, MenuItem, TextField, Typography } from "@mui/material";
import RTL from "../../../RTL/Rtl";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height:620,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewProducts(props) {
  const [open, setOpen] = React.useState(false);
  const [addProduct, setAddProduct] = React.useState([]);

  const [formData, setFormData] = React.useState({
    title: "",
    writer: "",
    price: "",
    number: "",
    category: "",
    imageUrl: "",
    group: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("writer", formData.writer);
    data.append("price", formData.price);
    data.append("number", formData.number);
    data.append("category", formData.category);
    data.append("group", formData.group);
    data.append("image", event.target.images.files[0]);

    fetch("http://localhost:3002/products", {
      method: "POST",
      body: data,
    })
      .then(() => {
        console.log("new product added");
        setAddProduct(addProduct.concat([data]));
        handleClose();
        props.onUpdate();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleOpen = () => {
    setOpen(true);
    setFormData({
      title: "",
      writer: "",
      price: "",
      number: "",
      category: "",
      imageUrl: "",
      group: "",
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>افزودن محصول</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} dir="rtl">
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <p>افزودن محصول</p>
            <RTL>
              <TextField
                id="title"
                name="title"
                label="نام محصول"
                variant="outlined"
                value={formData.title}
                onChange={handleInputChange}
                fullWidth
                sx={{ mt: "5px", mb: "15px" }}
              />
              <TextField
                id="group"
                name="group"
                label="گروه"
                select
                variant="outlined"
                value={formData.group}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
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
                value={formData.writer}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
              />
              <TextField
                id="price"
                name="price"
                label="قیمت"
                variant="outlined"
                value={formData.price}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
              />
              <TextField
                id="number"
                name="number"
                label="تعداد محصول"
                variant="outlined"
                value={formData.number}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
              />
              <TextField
                id="category"
                name="category"
                label="شرح کالا"
                variant="outlined"
                value={formData.category}
                onChange={handleInputChange}
                fullWidth
                sx={{ mb: "15px" }}
                multiline
                rows={4}
              />
            </RTL>
            <Typography sx={{ mb: "15px" }}>
              تصویر کتاب را آپلود کنید
            </Typography>
            <input
              id="images"
              type="file"
              value={formData.images}
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
