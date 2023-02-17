import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Main, Register, Login, Navbar, ForgotPass } from "..";
import { getItem } from "../../helpers/persistanse-storage";
import authService from "../../service/auth";
import { signUserSuccess } from "../../slice/actions";

import { ArticleDetail, CreateArticle, EditArticle } from "../";
import { Container } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const res = await authService.userInfo();
      dispatch(signUserSuccess(res.user));
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
  }, []);
  return (
    <Container maxWidth={"1920px"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/edit-article/:slug" element={<EditArticle />} />
      </Routes>
    </Container>
  );
};

export default App;
