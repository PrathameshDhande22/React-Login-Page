import { UploadOutlined } from "@mui/icons-material";
import { Button, Upload } from "antd";
import { useState } from "react";

export const Step4 = () => {
  const [autoLoc, setLocation] = useState("do not support");
  navigator.geolocation.getCurrentPosition((pos) => {
    setLocation(`${pos.coords.latitude}+${pos.coords.longitude}`);
  });
  return (
    <>
      <span className="text-2xl fontchange text-center block">
        Multi File Upload :{" "}
      </span>
      <div className="text-center mt-6">
        <span className="block my-3">Upload Png or Pdf File</span>
        <Upload accept="image/png, .pdf" maxCount={5}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
    </>
  );
};
