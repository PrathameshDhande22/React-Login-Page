import { TextField } from "@mui/material";

export const Step2 = () => {
  return (
    <>
      <span className="text-2xl fontchange text-center block">Address : </span>
      <div className="formdetails flex flex-col space-y-4 ">
        <TextField
          fullWidth
          variant="standard"
          type="text"
          name="address1"
          label="Address Line 1"
        />

        <TextField
          fullWidth
          variant="standard"
          type="text"
          name="address2"
          label="Address Line 2"
        />
        <TextField
          fullWidth
          variant="standard"
          type="text"
          name="city"
          label="City"
        />
        <TextField
          fullWidth
          variant="standard"
          type="email"
          name="state"
          label="State"
        />
        <TextField
          fullWidth
          variant="standard"
          type="number"
          name="pincode"
          label="Pincode"
        />
        <TextField
          fullWidth
          variant="standard"
          type="text"
          name="country"
          label="Country"
        />
      </div>
    </>
  );
};
