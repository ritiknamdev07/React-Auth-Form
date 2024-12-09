import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const navigate = useNavigate();
  const initalValues: SignupFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Password is required"),
  });

  const handleSubmit = (values: SignupFormValues) => {
    setIsSignupSuccessful(true);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-[#accffe]">
      <div className="h-[300px] mt-[150px] mr-[180px]  ">
        <img className="h-[300px] " src="src/assets/images/image2.png" alt="" />
      </div>
      <Formik
        initialValues={initalValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col p-14  absolute z-10 text-center h-[450px]     bg-white ">
          <div className="h-[80px]">
            <h1 className="text-2xl font-semibold mb-2">NEW USER</h1>
            {isSignupSuccessful && (
              <p className="text-sm text-green-600 font-semibold">
                "Signup Successful"
              </p>
            )}{" "}
          </div>
          <div className="h-[70px] block w=full">
            <span className="flex py-1  items-center border-b-2 hover:border-[#accffe] gap-2 text-[#999] font-semibold text-[16px] ">
              {" "}
              <MdOutlineEmail className="text-xl" />
              <Field
                className="block has-[38px] w-full  focus:border-none"
                name="email"
                type="email"
                Placeholder="Email"
                aria-required="true"
                aria-describedby="email-error"
              />
            </span>
            <ErrorMessage
              className="text-red-600 font-semibold text-sm "
              name="email"
              component="div"
              aria-live="polite"
            />
          </div>
          <div className="h-[70px] block w=full">
            <span className="flex py-1 items-center border-b-2 gap-2 text-[#999] hover:border-[#accffe] font-semibold text-[16px]">
              <MdOutlinePassword />
              <Field
                className="block has-[38px] w-full  focus:border-none"
                name="password"
                type="password"
                Placeholder="Password"
                aria-required="true"
                aria-describedby="password-error"
              />
            </span>
            <ErrorMessage
              className="text-red-600 font-semibold text-sm "
              name="password"
              component="div"
              aria-live="polite"
            />
          </div>
          <div className="h-[70px] block w=full">
            <span className="flex py-1 items-center border-b-2 gap-2 text-[#999] hover:border-[#accffe] font-semibold text-[16px]">
              <MdOutlinePassword />
              <Field
                className="block has-[38px] w-full  focus:border-none"
                name="confirmPassword"
                type="password"
                Placeholder="Confirm Password"
                aria-required="true"
                aria-describedby="password-error"
              />
            </span>
            <ErrorMessage
              className="text-red-600 font-semibold text-sm "
              name="confirmPassword"
              component="div"
              aria-live="polite"
            />
          </div>
          <button
            className="bg-[#accffe] mt-5 py-2 text-white font-semibold text-xl"
            type="submit"
            aria-label="Submit signup form"
          >
            Sign UP
          </button>

          <div className="font-bold mt-2 text-sm text-[#999]">
            already have account{" "}
            <Link className="text-[#accffe] underline" to="/">
              login
            </Link>{" "}
          </div>
        </Form>
      </Formik>
      <div className="h-[50px] mt-30 ml-[0px]  ">
        <img className="h-[150px]" src="src/assets/images/image2.png" alt="" />
      </div>
    </div>
  );
};

export default SignUpForm;
