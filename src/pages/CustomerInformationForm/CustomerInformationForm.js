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
import { useDispatch, useSelector } from "react-redux";
import { setCustomerInformation } from "../../component/customer/Customer";

const CustomerInformationForm = () => {
  const totalPrice = useSelector((state) => state.price.value);
  const customerInfromation = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      familyName: "",
      addres: "",
      number: "",
      date: null,
      totalPrice: totalPrice,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "نام باید بیشتر از 2 کارکتر باشد")
        .required("لطفا نام خود را وارد کنید"),

      familyName: Yup.string()
        .min(3, "فامیلی باید بیشتر از 2 کارکتر باشد")
        .required("لطفا فامیلی خود را وارد کنید"),

      addres: Yup.string()
        .min(10, "آدرس خود را کامل وارد کنید")
        .required("لطفا آدرس را وارد کنید"),

      number: Yup.string()
        .max(12, `تعداد ارقام وارد شده برای تلفن صحیح نمی باشد`)
        .min(11, "شماره تلفن صحیح نمی باشد")
        .required("تلفن خود را وارد نمایید"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      customerInfromation(
        setCustomerInformation(JSON.stringify(values, null, 2))
      );
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
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div
                      style={{
                        fontSize: "15px",
                        color: "red",
                      }}
                    >
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                  <TextField
                    id="firstName"
                    label="نام"
                    multiline
                    maxRows={4}
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Box>

                <Box>
                  {formik.touched.familyName && formik.errors.familyName ? (
                    <div
                      style={{
                        fontSize: "15px",
                        color: "red",
                      }}
                    >
                      {formik.errors.familyName}
                    </div>
                  ) : null}
                  <TextField
                    id="familyName"
                    label="فامیلی"
                    multiline
                    maxRows={4}
                    name="familyName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.familyName}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box>
                  {formik.touched.addres && formik.errors.addres ? (
                    <div
                      style={{
                        fontSize: "15px",
                        color: "red",
                      }}
                    >
                      {formik.errors.addres}
                    </div>
                  ) : null}
                  <TextField
                    id="addres"
                    label="آدرس"
                    multiline
                    maxRows={4}
                    name="addres"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.addres}
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
                  <span>تاریخ</span>
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
