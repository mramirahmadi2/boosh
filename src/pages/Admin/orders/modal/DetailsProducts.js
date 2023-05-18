import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
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

export default function CheckCustomer({ id }) {
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/orders/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddShoppingCartIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} dir="rtl">
          <RTL>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              کالاهایی که برای مشتری پست خواهد شد.
            </Typography>
            <Table sx={{ mr: "-20px" }}>
              <TableHead>
                <TableRow>
                  <TableCell>نام محصول</TableCell>
                  <TableCell>تعداد</TableCell>
                  <TableCell>قیمت واحد</TableCell>
                  <TableCell>مبلغ کل</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customer.products &&
                  customer.products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell>{product.title}</TableCell>
                      <TableCell>{product.number}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.number * product.price}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </RTL>

          <Button onClick={handleClose} color="error">
            باشه
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
