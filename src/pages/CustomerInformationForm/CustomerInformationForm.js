import { useFormik } from "formik";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import * as Yup from "yup";
import RTL from "../../RTL/Rtl";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setCustomerInformation} from "../../component/customer/Customer"

const CustomerInformationForm = () => {
  const totalPrice = useSelector((state) => state.price.value);
  const products = Object.values(localStorage).map((item) => JSON.parse(item));
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      number: "",
      date: null,
      totalPrice: totalPrice,
      products: products
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "نام باید بیشتر از 2 کارکتر باشد")
        .required("لطفا نام خود را وارد کنید"),

        lastname: Yup.string()
        .min(3, "فامیلی باید بیشتر از 2 کارکتر باشد")
        .required("لطفا فامیلی خود را وارد کنید"),

        address: Yup.string()
        .min(10, "آدرس خود را کامل وارد کنید")
        .required("لطفا آدرس را وارد کنید"),

      number: Yup.string()
        .max(12, `تعداد ارقام وارد شده برای تلفن صحیح نمی باشد`)
        .min(11, "شماره تلفن صحیح نمی باشد")
        .required("تلفن خود را وارد نمایید"),
    }),
    onSubmit: () => {
      try {
        dispatch(setCustomerInformation(formik.values));
        navigator("/bankPayment");
      } catch (error) {
        console.error("Error submitting form data:", error);
        // Handle the error appropriately (e.g., show an error message to the user)
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { width: "30ch", mr: 5, mt: 3, ml: 3 },
          }}
        >
          <Box>
            <span>جمع کل مبلغ خرید : {totalPrice} تومان</span>
          </Box>
          <RTL>
            <div>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box>
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div
                      style={{
                        fontSize: "15px",
                        color: "red",
                      }}
                    >
                      {formik.errors.firstname}
                    </div>
                  ) : null}
                  <TextField
                    id="firstname"
                    label="نام"
                    multiline
                    maxRows={4}
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Box>

                <Box>
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div
                      style={{
                        fontSize: "15px",
                        color: "red",
                      }}
                    >
                      {formik.errors.lastname}
                    </div>
                  ) : null}
                  <TextField
                    id="lastname"
                    label="فامیلی"
                    multiline
                    maxRows={4}
                    name="lastname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box>
                  {formik.touched.address && formik.errors.address ? (
                    <div
                      style={{
                        fontSize: "15px",
                        color: "red",
                      }}
                    >
                      {formik.errors.address}
                    </div>
                  ) : null}
                  <TextField
                    id="address"
                    label="آدرس"
                    multiline
                    maxRows={4}
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                </Box>

                <Box>
                  {formik.touched.number && formik.errors.number ? (
                    <div
                      style={{
                        fontSize: "15px",
                        color: "red",
                      }}
                    >
                      {formik.errors.number}
                    </div>
                  ) : null}
                  <TextField
                    type="number"
                    id="number"
                    label="تلفن"
                    multiline
                    maxRows={4}
                    name="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.number}
                    sx={{ textAlign: "right" }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box>
                  <span> تاریخ ارسال</span>
                  <br />
                  <DatePicker
                    locale={persian_fa}
                    calendar={persian}
                    value={formik.values.date}
                    onChange={(date) =>
                      formik.setFieldValue("date", date.format("YYYY-MM-DD"))
                    }
                    inputClass="date-picker"
                  />
                </Box>
              </Box>
            </div>
          </RTL>
        </Box>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Button variant="contained" type="submit">
            پرداخت
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default CustomerInformationForm;
