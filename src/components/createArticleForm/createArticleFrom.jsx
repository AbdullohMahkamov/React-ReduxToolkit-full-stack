import { Box, Button, TextareaAutosize, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CreateArticleFrom = (props) => {
  const { title, setTitle, description, setDescription, body, setBody, formSubmit } = props;
  const { isLoading } = useSelector((state) => state.auth);
  return (
    <Box>
      <Typography variant="h2">Create article</Typography>

      <form onSubmit={formSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label={"Title"}
          name="title"
          autoComplete="title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextareaAutosize
          placeholder={"Description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", height: "100px", padding: "10px" }}
        />
        <TextareaAutosize
          className="text__area--body"
          placeholder={"Body"}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ width: "100%", height: "200px", padding: "10px" }}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          {isLoading ? "Creating..." : "Create article"}
        </Button>
      </form>
    </Box>
  );
};

export default CreateArticleFrom;
