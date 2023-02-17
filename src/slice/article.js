import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticlesError: (state, action) => {
      state.error = action.payload;
    },
    getArticlesDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticlesDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticlesDetailError: (state) => {
      state.isLoading = false;
    },
    postArticleStart: (state) => {
      state.isLoading = true;
    },
    postArticleSuccess: (state) => {
      state.isLoading = false;
    },
    postArticleError: (state) => {
      state.isLoading = false;
      state.error = "Erroriwe";
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesError,
  getArticlesDetailStart,
  getArticlesDetailSuccess,
  getArticlesDetailError,
  postArticleStart,
  postArticleSuccess,
  postArticleError,
} = articleSlice.actions;
export default articleSlice.reducer;
