import { Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import forgotpassword from "../Schemas/forgotpassword";

export const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      retypepassword: "",
    },
    validationSchema: forgotpassword,
    onSubmit: (values) => {
      alert(values);
    },
  });
  return (
    <div className="forgotpg">
      <div className="bg-white absolute rounded-2xl flex flex-col w-[100%] items-center content-center top-16 sm:left-40 md:left-64 lg:left-[40%] xl:left=[60%] shadow-xl xsm:w-[400px] xsm:left-6">
        <Typography
          variant="h4"
          align="center"
          fontFamily={"Luxurious Roman"}
          className="py-10"
        >
          Forgot Password
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-3 w-[80%]"
        >
          <TextField
            fullWidth
            id="emailtxt"
            label="Email"
            variant="standard"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            id="passtxt"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            id="repasstxt"
            label="Re-enter Password"
            variant="standard"
            type="password"
            name="retypepassword"
            value={formik.values.retypepassword}
            onChange={formik.handleChange}
            error={
              formik.touched.retypepassword &&
              Boolean(formik.errors.retypepassword)
            }
            helperText={
              formik.touched.retypepassword && formik.errors.retypepassword
            }
          />
          <Button variant="contained" className="loginbtn" type="submit">
            Submit
          </Button>
        </form>
        <div className="flex flex-col justify-around items-center gap-3 my-14">
          <Typography
            variant="caption"
            fontSize={13}
            fontFamily={"Poppins ,sans-serif"}
          >
            {"Already Have an Account? "}
            <Link to={"/"} className="text-blue-700 hover:underline">
              Sign In
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};
