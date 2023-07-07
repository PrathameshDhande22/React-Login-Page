import { TextField } from "@mui/material";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

export const Step1 = () => {
    const [value,setvalue]=useState("")
  return (
    <div>
      <span className="text-2xl fontchange text-center block">Basic Details : </span>
      <div className="formdetails flex flex-col space-y-4 ">
        <TextField
          fullWidth
          variant="standard"
          type="text"
          name="username"
          label="User Name"
        />
        <PhoneInput
        className="pt-4"
          placeholder="Enter phone number"
          defaultCountry="IN"
          value={value}
          onChange={setvalue}
        />
        <TextField
          fullWidth
          variant="standard"
          type="email"
          name="email"
          label="Email ID"
        />
      </div>
    </div>
  );
};
