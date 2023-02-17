import axios from "./api";

const authService = {
  async userRegister(user) {
    const res = await axios.post("/users", { user });
    return res.data;
  },
  async userLogin(user) {
    const res = await axios.post("/users/login", { user });
    return res.data;
  },
  async userInfo() {
    const res = await axios.get("/user");
    return res.data;
  },
};

export default authService;
