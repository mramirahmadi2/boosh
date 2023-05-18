import CheckIcon from "@mui/icons-material/Check";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, IconButton } from "@mui/material";
import axios from "axios";
import RTL from "../../../../RTL/Rtl";

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

export default function CheckCustomer({ id, name, onUpdate }) {
  const [open, setOpen] = useState(false);
  

  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = async () => {
      await axios.delete(`http://localhost:3002/posts/${id}`).then(() => {
        handleClose();
        onUpdate();
      });
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <CheckIcon />
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
              تایید مشتری {name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              کالا به دست مشتری رسید.
            </Typography>
          </RTL>
          <Button onClick={handleClick} color="success">
            باشه
          </Button>
          <Button onClick={handleClose} color="error">
            نه هنوز
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
