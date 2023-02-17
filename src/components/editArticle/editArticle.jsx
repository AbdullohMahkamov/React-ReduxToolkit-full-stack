import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ArticlesService from "../../service/articles";
import { getArticlesDetailError, getArticlesDetailStart, getArticlesDetailSuccess } from "../../slice/article";
import CreateArticleFrom from "../createArticleForm/createArticleFrom";
// import CreateArticleFrom from "../createArticleForm/createArticleFrom";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticlesDetailStart());
      try {
        const response = await ArticlesService.getArticleDetails(slug);
        setTitle(response.article.title);
        setDescription(response.article.description);
        setBody(response.article.body);
        dispatch(getArticlesDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticlesDetailError());
      }
    };

    getArticleDetail();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
  };

  const fromPros = { title, setTitle, description, setDescription, body, setBody, formSubmit };

  return (
    <Box sx={{ textAlign: "center", maxWidth: "600px", m: "auto" }}>
      <Typography variant="h2">Edit article</Typography>
      <CreateArticleFrom {...fromPros} />
    </Box>
  );
};

export default EditArticle;
