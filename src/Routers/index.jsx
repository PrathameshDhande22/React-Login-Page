import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { ForgotPassword } from "../Components/ForgotPassword";
import { StepForm } from "../Pages/StepForm";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<ForgotPassword/>}/>
      <Route path="/form" element={<StepForm/>}/>
    </Routes>
  );
};
