import { Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import loginvalid from "../Schemas/loginvalid";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginauth from "../Service/loginauth";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const navi = useNavigate();
  document.title = "Login Page";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginvalid,
    onSubmit: (values) => {
      loginauth(values.email, values.password)
        .then((res) => {
          localStorage.setItem("token", res.data.authToken);
          toast.success("Login Success");
          navi("/form");
        })
        .catch(() => {
          toast.error("Invalid Credentials !");
        });
    },
  });
  return (
    <div className="bg-white absolute rounded-2xl flex flex-col w-[100%] items-center content-center top-20 sm:left-40 md:left-64 lg:left-[40%] xl:left=[60%] shadow-xl xsm:w-[400px] xsm:left-6">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
        progress={undefined}
        theme="colored"
      />
      <Typography
        variant="h4"
        align="center"
        fontFamily={"Luxurious Roman"}
        className="py-10"
      >
        Login
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-7 w-[80%]"
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
        <Button variant="contained" className="loginbtn" type="submit">
          Login
        </Button>
      </form>
      <div className="flex flex-col justify-around items-center gap-3 my-14">
        <Typography
          variant="caption"
          fontSize={13}
          fontFamily={"Poppins ,sans-serif"}
        >
          Forgot{" "}
          <Link to={"/forgot"} className="text-blue-700 hover:underline">
            Password?
          </Link>
        </Typography>
      </div>
    </div>
  );
};
export default LoginCard;
