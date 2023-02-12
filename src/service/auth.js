import axios from "./api";

const authService = {
  async userRegister(user) {
    const res = await axios.post("/users", { user });
    return res.data;
  },
  async userLogin(user) {
    const respons = await axios.post("/users/login", { user });
    return respons.data;
  },
  async userInfo() {
    // const response = await axios.get("/user");
  },
};

export default authService;
