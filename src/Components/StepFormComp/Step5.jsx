import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

export const Step5 = () => {
  const navi = useNavigate();
  setTimeout(() => {
    // localStorage.removeItem("token");
    navi("/");
  }, 5000);

  return (
    <>
      <span className="text-3xl fontchange text-center block">
        Success : <CheckCircleIcon className="text-green-500" />{" "}
      </span>
      <div className="text-center text-xl m-10">
        <div>You Have Successfully Submitted the Form</div>
        <div className="mt-5">Thank You !</div>
        <div className="mt-8 text-base">
          You will be Logout in <span id="timer">5</span> seconds
        </div>
      </div>
    </>
  );
};
