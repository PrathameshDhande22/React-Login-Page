import axios from "axios";

const loginauth = async (email, password) => {
  const url = import.meta.env.VITE_BASE_URL;
  const token = await axios.post(`${url}/auth/login`, {
    email: email,
    password: password,
  });
  return token;
};

export default loginauth;
