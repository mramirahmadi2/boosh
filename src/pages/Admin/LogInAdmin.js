import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import * as Yup from "yup";

function Login() {
    let RequiredName = (
      <p
        style={{
          color: "red",
        }}
      >
        نام کاربری خالی است*
      </p>
    );
    let RequiredPassword = (
      <p
        style={{
          color: "red",
        }}
      >
        لطفا رمز عبور را وارد کنید*
      </p>
    );
  
    const naviget = useNavigate();
    const formik = useFormik({
      initialValues: {
        Name: "",
  
        password: "",
      },
      validationSchema: Yup.object({
        Name: Yup.string()
          .min(5, `تعداد کارکتر کمتر از حد مجاز است`)
  
          .required(RequiredName),
  
        password: Yup.string()
          .min(5, `تعداد کارکتر کمتر از حد مجاز است`)
  
          .required(RequiredPassword),
      }),
      onSubmit: (values) => {
        let username = `admin`;
        let passwordAdmin = `admin`;
  
        let nameSH = values.Name;
        let pasword = values.password;
  
        if (nameSH === username && pasword === passwordAdmin) {
          naviget("/AdminPanl");
        }
      },
    });
  
    return (
      <div className="login-page">
        
          <div>
            <form onSubmit={formik.handleSubmit} >
              <h2 className="title">ورود به پنل مدیریت بووش</h2>
              <FormControl sx={{ mt: 1 }}>
                <InputLabel sx={{ mt: 1 }} htmlFor="my-input">
                  نام کاربری
                </InputLabel>
                <Input
                  sx={{ mt: 8 }}
                  id="my-input"
                  aria-describedby="my-helper-text"
                  name="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Name}
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <div>{formik.errors.Name}</div>
                ) : null}
              </FormControl>
              <br />
              <FormControl sx={{ mt: 1 }}>
                <InputLabel sx={{ mt: 1 }} htmlFor="my-input">
                  رمز عبور
                </InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
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
              <div>
                <Link className="back-home" to="/">
                  بازگشت به سایت
                </Link>
              </div>
            </form>
          </div>
        
      </div>
    );
  }
  
  export default Login;
  