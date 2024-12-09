import { FC, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

interface LoginFromValues {
  email: string;
  password: string;
  toggle: boolean;
}

interface UserData {
  email: string;
}

const LoginForm: FC = () => {
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [userEmail, setUserEmail] = useState<UserData>({ email: "" });
  const initialValues: LoginFromValues = {
    email: "",
    password: "",
    toggle: false,
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("email required"),
    password: Yup.string().min(6, "Too short").required("password required"),
  });

  const handleSubmit = (values: LoginFromValues) => {
    setUserEmail(values.email);
    setIsLoginSuccessful(true);
    if (values.toggle) {
      const userData = JSON.stringify(userEmail);
      localStorage.setItem("user", userData);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-[#accffe]">
      <div className="h-[300px] mt-[125px] mr-[190px]  ">
        <img className="h-[300px] " src="src/assets/images/image1.png" alt="" />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col p-14  absolute z-10 text-center h-[420px]     bg-white ">
          <div className="h-[80px] mb-2">
            <h1 className="text-2xl font-semibold mb-1">USER</h1>
            {isLoginSuccessful && (
              <p className="text-sm text-green-600 font-semibold">
                "Login Successful"
              </p>
            )}{" "}
          </div>
          <div className="h-[80px] block">
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
          <div className="h-[80px] block">
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

          <div className="text-[#999] flex ">
            <label>
              <Field className="" type="checkbox" name="toggle" />
              Remember Me
            </label>
          </div>

          <button
            className="bg-[#accffe] m-5 py-2 text-white font-semibold text-xl"
            type="submit"
          >
            Login
          </button>

          <div className="font-bold text-sm text-[#999]">
            don't have account{" "}
            <Link className="text-[#accffe] underline" to="/signup">
              SignUp
            </Link>{" "}
          </div>
        </Form>
      </Formik>
      <div className="h-[50px] mt-40 ml-[80px]  ">
        <img className="h-[150px]" src="src/assets/images/image2.png" alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
