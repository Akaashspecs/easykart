import { Formik, Form, yupToFormErrors } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import {FormikInput} from "./Input";


function Login(){
    function callLoginApi(values) {
        console.log("Sending data", values.email, values.myPassword);
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        myPassword: Yup.string().min(6).max(12).required(),
    });

    const initialValues = {
        email: "",
        myPassword: "",
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-100">
            <Formik
            initialValues={initialValues}
            onSubmit={callLoginApi}
            validationSchema={schema}
            validateOnMount
            >
                <Form className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white">
                    <h1 className="text-2xl font-bold self-center mb-4">
                        Login to amazon
                    </h1>
                    <FormikInput
                        label="Email address"
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Email or Username"
                        className="rounded-b-none"
                    />
                    <FormikInput
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
                        Loging
                    </Button>
                    
                </Form>
            </Formik>
        </div>
    );

}

export default Login;