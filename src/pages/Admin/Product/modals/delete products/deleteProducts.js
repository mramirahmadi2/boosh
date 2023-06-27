import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, IconButton } from "@mui/material";
import axios from "axios";
import RTL from "../../../../../RTL/Rtl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
   boxShadow: "4px 8px 16px", 
  p: 4,

};

export default function DeleteProducts({ id, name , onUpdate}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = async () => {
    await axios.delete(`http://localhost:3002/products/${id}`).then(() => {
      handleClose();
      onUpdate();
    });
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <DeleteForeverIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} dir="rtl">
          <RTL>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              حذف کتاب {name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              آیا از حذف کتاب {name} اطمینان دارید؟
            </Typography>
          </RTL>
          <Button onClick={handleClick} color="error">
            حذف
          </Button>
          <Button onClick={handleClose}>بیخیال</Button>
        </Box>
      </Modal>
    </div>
  );
}
