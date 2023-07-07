import * as yup from "yup";

const forgotpassword = yup.object({
  email: yup
    .string()
    .email("Enter a Valid Email")
    .required("Email ID is required"),
  password: yup.string().min(6).required("Password is Required"),
  retypepassword: yup
    .string()
    .min(6)
    .oneOf([yup.ref("password")], "Password Must Match")
    .required("Re-enter the Password"),
});

export default forgotpassword;
