"use client";
import { useFormik } from "formik";
import { toast } from 'react-toastify';;
import { signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/Schemas";


const initialValues = {
  username: "",
  password: "",
};
export default function LoginForm() {
  
  const router = useRouter();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (async (values, action) => {

        try {
          const result = await signIn('credentials', {
            redirect: false,
            username: values.username,
            password: values.password,
          })
          console.log(result)
          if (
            result &&
            (result).status == 200 &&
            (result).error == undefined
          ) {
            // toast.success('loged in successful');
            router.push('/admin/dashbord')
          } else {
            toast.error('incorrect username or password')
          }
        } catch (error) {
        //   alert('failed to login')
          console.log('Login Failed:', error)
        }

        action.resetForm();

      }
      ),
    });


  return (
    <>
      <div className="absolute top-0 w-full h-screen bg-no-repeat bg-full -z-20"
        style={{
          backgroundImage: "url('/register_bg_2.png')",
        }}></div>
      <div className="grid place-items-center -mt-24 h-screen">
        <div className="bg-green-50 shadow-lg p-5 rounded-lg border-t-4 border-green-400 w-full sm:w-80">
          <h1 className="text-xl font-bold my-4">Login</h1>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="relative w-full mb-3">

              <label
                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                username
              </label>
              <input
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="username"
              />
              {errors.username && touched.username ? (
                <p className=" text-red-600 text-sm">* {errors.username}</p>
              ) : null}
            </div>

            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
              name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                      <p className=" text-red-600 text-sm">* {errors.password}</p>
                    ) : null}
            </div>


            <div className="text-center mt-6">
              <button type="submit"
                className="bg-green-500 text-white active:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              >
                Sign In
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}