import { useState } from "react";
import Auth from "../Auth";
import { Step1 } from "../Components/StepFormComp/Step1";
import { Step2 } from "../Components/StepFormComp/Step2";
import { Step3 } from "../Components/StepFormComp/Step3";
import { Step4 } from "../Components/StepFormComp/Step4";
import { Step5 } from "../Components/StepFormComp/Step5";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button } from "antd";
import { Progress } from "antd";

export const StepForm = () => {
  const [step, setStep] = useState(1);

  return (
    <Auth>
      <div className="flex justify-center items-center">
        <div className="formpage bg-white text-black rounded-2xl mt-10 w-[300px]">
          <div className="page flex flex-col items-center p-2">
            {(() => {
              switch (step) {
                case 1:
                  return (
                    <div className="p-8 w-full">
                      <Step1 />
                    </div>
                  );
                case 2:
                  return (
                    <div className="p-6 w-full">
                      <Step2 />
                    </div>
                  );
                case 3:
                  return (
                    <div className="p-6 w-full">
                      <Step3 />
                    </div>
                  );
                case 4:
                  return (
                    <div className="p-6 w-full">
                      <Step4 />
                    </div>
                  );
                case 5:
                  return (
                    <div className="p-6 w-full">
                      <Step5 />
                    </div>
                  );
                default:
                  console.log("nodefualt");
              }
            })()}
            {(step != 4) & (step != 5) ? (
              <Button
                icon={<NavigateNextIcon />}
                shape="round"
                size="large"
                className="mt-7"
                type="primary"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Next{" "}
              </Button>
            ) : null}
            {step == 4 ? (
              <Button
                icon={<NavigateNextIcon />}
                shape="round"
                size="large"
                style={{ backgroundColor: "green" }}
                className="mt-7"
                type="primary"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Submit{" "}
              </Button>
            ) : null}
            <Progress
              percent={20 * step}
              className="ml-10 absolute left-2 bottom-0 m-8"
            />
          </div>
        </div>
      </div>
    </Auth>
  );
};
