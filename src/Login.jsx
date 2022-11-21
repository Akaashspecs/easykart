import { withFormik } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { Navigate } from "react-router";
import withUser from "./withUser";
import withAlert from "./withAlert";
import { Link } from "react-router-dom";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.myPassword,
    })
    .then((response) => {
      const { user, token } = response.data;
      console.log(response.data);
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({ type: "error", message: "Invalid credentials" });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  myPassword: Yup.string().min(4).max(12).required(),
});

const initialValues = {
  email: "",
  myPassword: "",
};

export function Login({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cover h-screen bg-[url('https://i.redd.it/t7b5j2cqpce21.png')] bg-no-repeat">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white"
      >
        <h1 className="text-2xl font-bold self-center mb-4">Login to amazon</h1>
        <Input
          values={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email address"
          id="email-address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email or Username"
          className="rounded-b-none"
        />
        <Input
          values={values.myPassword}
          error={errors.myPassword}
          touched={touched.myPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Password"
          id="xyz"
          name="myPassword"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Password"
          className="rounded-t-none"
        />
        <Button type="sumbit" className="self-end mt-5">
          Login
        </Button>
      </form>

      <div className="flex">
        <p className="mr-1">Click here for </p>
        <Link to="/signup">
          <p className="text-blue-500"> signup</p>
        </Link>
      </div>
    </div>
  );
}

const FormikLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(Login);

export default withAlert(withUser(FormikLogin));
