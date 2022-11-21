import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import Input from "./Input";
import { withFormik } from "formik";
import Button from "./Button";

import axios from "axios";
import withUser from "./withUser";
import withAlert from "./withAlert";

function callLoginApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      email: values.email,
      password: values.myPassword,
      fullName: values.username,
    })

    .catch(() => {
      bag.props.setAlert({ type: "error", message: "Invalid credentials" });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  myPassword: Yup.string().min(4).max(12).required(),
  username: Yup.string().required(),
});

const initialValues = {
  email: "",
  myPassword: "",
  username: "",
};

function SignUp({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isValid,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cover h-screen bg-[url('https://i.redd.it/t7b5j2cqpce21.png')] bg-no-repeat">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white"
      >
        <h1 className="text-2xl font-bold self-center mb-4">Login to amazon</h1>
        <Input
          values={values.username}
          error={errors.username}
          touched={touched.username}
          onChange={handleChange}
          onBlur={handleBlur}
          id="uname"
          label="Username"
          type="text"
          name="username"
          autoComplete="username"
          required
          className="rounded-b-none"
          placeholder="username"
        />

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

        {touched.email && errors.email && (
          <div className="text-red-500 rounded font-Shadows text-2xl p-2">
            {errors.email}
          </div>
        )}

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

        {touched.password && errors.password && (
          <div className="text-red-500 rounded font-Shadows text-2xl p-2">
            {errors.password}
          </div>
        )}

        <button
          type="submit"
          className="disabled:bg-neutral-700 disabled:hover:none bg-red-400 p-2 hover:bg-sky-500 text-2xl font-Dancing rounded-lg m-2"
        >
          CONTINUE
        </button>
      </form>

      <div className="border-t-2 border-slate-500 mx-4"></div>

      <div className="flex md:flex-row flex-col justify-center mb-4 items-center">
        <h1 className="flex md:flex-row flex-col items-center text-3xl text-blue-400 font-Pacifico">
          Already Have ACCOUNT?
        </h1>
        <Link
          to="/login"
          className="text-red-400 mx-2 underline font-Shadows text-3xl hover:italic"
        >
          {" "}
          <h1>Click Here</h1>{" "}
        </Link>
      </div>
    </div>
  );
}

const FormikSignup = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: callLoginApi,
})(SignUp);

export default withAlert(withUser(FormikSignup));
