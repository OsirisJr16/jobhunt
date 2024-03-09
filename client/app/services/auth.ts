import apiUrl from "../shared/apiUrl";
import axios from "axios";

const authUrl: string = apiUrl + "/auth";

const login = async (user: any) => {
  try {
    if (user.email && user.password) {
      const response = await axios.post(`${authUrl}`, user);
      const { token, userId, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);
      return response.data;
    } else {
      console.error("Invalid credentials");
    }
  } catch (error: any) {
    console.error("Login Failed:", error.message);
    throw error;
  }
};

const registerCompany = async (user: any) => {
  try {
    if (
      user.email &&
      user.password &&
      user.companyName &&
      user.companyAddress &&
      user.companyDescription
    ) {
      const response = await axios.post(`${authUrl}/registerCompany`, user);
      return response.data;
    }
  } catch (error: any) {
    console.error("Failed :", error);
    throw error;
  }
};
const authService = {
  login,
  registerCompany,
};

export default authService;
