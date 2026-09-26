"use client";
import React from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/Schemas";

interface LoginFormValues {
  username: string;
  password: string;
}

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<LoginFormValues>({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (formValues, action) => {
        try {
          const result = await signIn("credentials", {
            redirect: false,
            username: formValues.username,
            password: formValues.password,
          });
          if (result && result.status === 200 && !result.error) {
            toast.success("Logged in successfully");
            router.push("/admin/dashbord");
          } else {
            toast.error("Incorrect username or password");
          }
        } catch (error) {
          console.error("Login Failed:", error);
          toast.error("Failed to login");
        }

        action.resetForm();
      },
    });

  return (
    <>
      <div
        className="absolute top-0 w-full h-screen bg-no-repeat bg-full -z-20"
        style={{
          backgroundImage: "url('/register_bg_2.png')",
        }}
      />
      <div className="grid place-items-center h-[100vh]">
        <div className="bg-green-50 shadow-lg p-5 rounded-lg border-t-4 border-green-400 w-full sm:w-80">
          <h1 className="text-xl font-bold my-4">Login</h1>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                htmlFor="login-username"
              >
                Username
              </label>
              <input
                id="login-username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="username"
              />
              {errors.username && touched.username ? (
                <p className="text-red-600 text-sm">* {errors.username}</p>
              ) : null}
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                htmlFor="login-password"
              >
                Password
              </label>
              <input
                id="login-password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <p className="text-red-600 text-sm">* {errors.password}</p>
              ) : null}
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-green-500 text-white active:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
