import * as yup from "yup";

const loginvalid = yup.object({
  email: yup
    .string("Enter a valid Email")
    .email("Enter a valid Email")
    .required("Email is required"),
  password: yup
    .string("Enter a Password")
    .min(8)
    .required("Password is required"),
});

export default loginvalid;
