import { Button } from "antd";
import Upload from "antd/es/upload/Upload";
import { UploadOutlined } from "@mui/icons-material";

export const Step3 = () => {
  return (
    <>
      <span className="text-2xl fontchange text-center block">
        File Upload :{" "}
      </span>
      <div className="text-center mt-6">
      <span className="block my-3">Upload any Png or Pdf File</span>
        <Upload accept="image/png, .pdf" maxCount={1}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
    </>
  );
};
