import * as Yup from "yup";

export const emailSchema = Yup.object({
  fullname: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  subject: Yup.string().min(3).required("Please enter subject"),
  details: Yup.string().min(10).required("Please enter detail"),
});


export const loginSchema =  Yup.object({
  username: Yup.string().min(2).max(25).required("Please enter username"),
  password: Yup.string().min(3).required("Please enter password"),
});