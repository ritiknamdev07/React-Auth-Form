import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginPractice = () => {
  const initialValues = { email: "", password: "" };

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("email required"),
    password: Yup.string().min(6, "short").required("password required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className=" h-screen flex justify-center items-center bg-[#accffe]">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <div className="bg-white h-[400px] p-20  ">
            <Form className="flex flex-col gap-4 text-center" >
              <h1>USER</h1>
              <div>
                <Field className="focus:outline-none" type="email" name="email" placeholder="Email" />
                <ErrorMessage className="text-sm text-red-800 font-semibold" name="email" component="div" />
              </div>

              <div>
                <Field type="password" name="password" placeholder="Password" />

                <ErrorMessage className="text-sm text-red-800 font-semibold animate-bounce" name="password" component="div" />
              </div>
              <label className="flex items-center text-[#999] gap-2">
  <Field
    type="checkbox"
    name="toggle"
    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
  />
  Remember Me
</label>
              <button className="bg-[#accffe] text-white text-sm font-bold py-2  " type="submit">Login</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginPractice;
