import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CreateArticleFrom from "../createArticleForm/createArticleFrom";
import ArticlesService from "../../service/articles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postArticleStart, postArticleSuccess, postArticleError } from "../../slice/article";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const article = { title, description, body };
    dispatch(postArticleStart());
    try {
      await ArticlesService.postArticle(article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleError());
    }
  };

  const fromPros = { title, setTitle, description, setDescription, body, setBody, formSubmit };

  return (
    <Box sx={{ textAlign: "center", maxWidth: "600px", m: "auto" }}>
      <Typography variant="h2">Create article</Typography>
      <CreateArticleFrom {...fromPros} />
    </Box>
  );
};

export default CreateArticle;
