import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const [withoutPermission, setWithoutPermission] = useState(false);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, `تعداد کاراکتر کمتر از حد مجاز است`)
        .required("نام کاربری خالی است"),
      password: Yup.string()
        .min(5, `تعداد کاراکتر کمتر از حد مجاز است`)
        .required("لطفا رمز عبور را وارد کنید"),
    }),
    onSubmit: (values) => {
      const username = `admin`;
      const passwordAdmin = `admin`;
      const nameSH = values.name;
      const pasword = values.password;
      if (nameSH === username && pasword === passwordAdmin) {
        navigate("/AdminPanl/TableProduct");
      } else {
        setWithoutPermission(true);
      }
    },
  });

  return (
    <div className="login-page">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <h2 className="title">ورود به پنل مدیریت بووش</h2>
          <FormControl sx={{ mt: 1 }}>
            <InputLabel sx={{ mt: 1 }} htmlFor="name-input">
              نام کاربری
            </InputLabel>
            <Input
              sx={{ mt: 8 }}
              id="name-input"
              aria-describedby="name-helper-text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
          </FormControl>
          <br />
          <FormControl sx={{ mt: 1 }}>
            <InputLabel sx={{ mt: 1 }} htmlFor="password-input">
              رمز عبور
            </InputLabel>
            <Input
              id="password-input"
              aria-describedby="password-helper-text"
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </FormControl>
          <br />
          <Button
            size="large"
            sx={{ mt: 5, width: 150 }}
            variant="contained"
            type="submit"
          >
            ورود
          </Button>
          {withoutPermission ? (
            <p style={{ color: "red" }}>شما اجازه ورود ندارید</p>
          ) : null}
        </form>
        <div>
          <Link to="/">بازگشت به سایت</Link>
        </div>
      </div>
    </div>);}
    export default Login;

